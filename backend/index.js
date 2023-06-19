const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session({
	secret: 'userFist',
	cookie: {
		maxAge: 7200000,
		secure: true
	},
	resave: true,
	saveUninitialized: true,
	unset: 'destroy'
}));

app.use(cors({
	origin: [
		'http://localhost:8080',
		'http://localhost:8080/login'
],
	credentials: true,
	exposedHeaders: ['set-cookie']
}));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "typefist_db"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Koneksi ke MySQL sukses!")
});

app.post("/login", (req, response) =>{
	const username = req.body.username;
	const password = req.body.password;
    if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM user_table WHERE username = ? AND password = ?',
		[username, password],
		function(err, data) {
			// If there is an issue with the query, output the error
			if (err) throw err;
			// If the account exists
			if (data.length > 0) {
				console.log('Login Success');
				response.send(data);

			} else {
				console.log('Incorrect Username and/or Password!');
				response.send('Incorrect Username/Password!');
			}			
			response.end();
		});
	} else {
		console.log('Please enter Username and Password!');
		response.send('Please enter Username and Password!')
		response.end();
	}
});

app.post("/register", (req,res)=>{
	const username = req.body.username;
	const password = req.body.password;
	const email = req.body.email;

	if (username && password && email) {
		connection.query('SELECT * FROM user_table WHERE username = ?', [username],
		function(err, data, next) {

			if(err) next();

			if(data.length > 0) {
				console.log('Username sudah digunakan!');
				res.send('Username sudah dipakai!');
				res.end();
			} else {
				connection.query('SELECT * FROM user_table WHERE email = ?', [email],
				function(err, data, next) {

					if(err) next();

					if(data.length > 0) {
						console.log('Email sudah digunakan!');
						res.send('Email sudah dipakai!');
						res.end();
					} else {

						connection.query('INSERT INTO user_table (username, password, email, best_wpm, achv_01) VALUES (?, ?, ?, ?, ?)',
						[username, password, email, '0', '0'],
						(err) => {

							if (err) throw (err);

							console.log('register berhasil!');
							connection.query('SELECT * FROM user_table WHERE username = ? AND password = ?',
							[username, password],
							function(err, data) {

								if(err) throw(err);

								if(data.length > 0) {
									res.send(data);
								}
							});
						})
					}
				});
			}
		});

	} else {
		console.log('Masukkan dulu datanya!!');
		res.send({msg: 'Masukkan data cuy!'});
		res.end();
	}
})

app.post("/wpmupdate", (req, res)=>{
	const username = req.body.username;
	const newWPM = req.body.newWPM;

	if (username && newWPM) {
		connection.query('UPDATE user_table SET best_wpm = ? WHERE username = ?', [newWPM, username],
		(err)=> {
			if(err) throw(err);
			connection.query('SELECT * FROM user_table WHERE username = ?', [username], (err, data)=>{
				if(err) throw(err);
				if(data.length>0) {
					res.send(data);
				}
			})
		}
		)
	}
})

app.post("/lb", (req, res)=>{
	connection.query('SELECT username, best_wpm FROM user_table ORDER BY best_wpm DESC LIMIT 3', (err, data)=>{
		if(err) throw(err);
		if(data.length>0) {
			res.send(data);
		}
	})
})

app.listen(3000,() =>{
    console.log("Server di PORT 3000");
})