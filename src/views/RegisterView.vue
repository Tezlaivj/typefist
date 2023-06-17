<template>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up to typefist</title>
</head>

<body>
    <div class="header">
        <i class="fa fa-keyboard"></i> 
        <i class="fa-sharp fa-solid fa-house"></i>
    </div>    

    <div class="signup">
        <div class="box">
        <h1>Sign Up</h1>
        <h4>Already have an account? <a href="/login">Sign in</a></h4>
        <form @submit.prevent="register">
            <div class="input-container">
                <i class="fa-sharp fa-solid fa-user"></i>
                <input type="text" name="username" placeholder="Username" id="username" v-model="username" required>
            </div>
            <div class="input-container">
                <i class="fa-sharp fa-regular fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" id="email" v-model="email" required>
            </div>
            <div class="input-container">
                <i class="fa-sharp fa-solid fa-lock"></i>
                <input type="password" name="password" placeholder="Password" id="password" v-model="password" required>
            </div>
            <input type="submit" value="register">
        </form>
        <h5>By signing up, you agree with our<br> <a href="/tos">terms and agreements</a></h5>
        </div>
    </div>
</body>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

* {
    font-family: "Inconsolata";
}

body {
    background-color: #025464;
}

.header {
    height: 5vh;
    display: flex;
    justify-content: space-between;
}

.header i {
    padding: 3% 4%;
    font-size: 30px;
    color: #e57c23;
    transition: 0.3s;
}

.header i:hover {
    color: #e8aa42;
}

.signup {
    height: 90vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.box {
    min-width: 18rem;
    width: 30vw;
    background-color: #f8f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 1rem;
    box-shadow: 20px 20px black;
}

.signup h1{
    font-size: 3rem;
    color:#025464;
    margin: 0;
}

.signup h4{
    font-size: 1rem;
    color: #025464;
    margin: 2% 0 7% 0;
    text-align: center
}

.signup h5 {
    color: #025464;
    text-align: center;
}
.signup a {
    color: #e57c23;
}

form {
    display: flex;
    align-items: center;
    flex-direction: column;
}



.signup form input[type="password"],
.signup form input[type="text"],
.signup form input[type="email"] {
    font-size: 1rem;
    font-weight: 500;
    margin: 5% 0;
    display: block;
    min-width: 14rem;
    border: 2px solid #025464;
    padding: 1rem 1rem 1rem 3rem;
}

.signup form input[type="submit"] {
    width: fit-content;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    background-color: #e57c23;
    color: #f8f1f1;
    margin-top: 8%;
    padding: 5% 8%;
    transition: 0.3s;
}

.signup form input[type="submit"]:hover {
    width: fit-content;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    background-color: #e57c23;
    color: #f8f1f1;
    margin-top: 8%;
    padding: 5% 8%;
    scale: 0.9;
    box-shadow: 8px 8px black;
}

.input-container {
    position: relative;
}

.input-container i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    font-size: 1rem;
    color:#838889;
}
</style>

<script>
import axios from 'axios'
import $cookies from 'vue-cookies'
import $router from '@/router';

$cookies.config('1h');

export default {
    mounted() {
        let fontScript = document.createElement('script')
        fontScript.setAttribute('src', 'https://kit.fontawesome.com/cb6613d56d.js')
        fontScript.setAttribute('crossorigin', 'anonymous')
        document.head.appendChild(fontScript)

        let signedIn = $cookies.get('user')
        if (signedIn) {
            $router.push('/')
        }
    },
    data() {
        return {
            username:'',
            email:'',
            password:'',
            msg:''
        }
    },
    methods: {
        async register() {
            await axios.post(
                `http://localhost:3000/register`, {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
            ).then((res) => {
                console.log(res.data);
                if(res.data[0]) {
                    $cookies.set('user', res.data[0]);
                    $router.push('/');
                }
            })
        }
    }
}
</script>