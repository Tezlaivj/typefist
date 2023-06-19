<template>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign in to typefist</title>
    </head>

    <body>
        <div class="header">
            <h4><i class="fa fa-keyboard"></i> Typefist</h4>
            <a href="/"><i class="fa-sharp fa-solid fa-house"></i></a>
        </div>

        <div class="signin">
            <div class="box">
                <h1>Welcome!</h1>
                <h4>No account yet? <a href="/register">Sign up</a></h4>
                <form @submit.prevent="login">
                    <div class="input-container">
                        <i class="fa-sharp fa-solid fa-user"></i>
                        <input type="text" name="username" placeholder="Username" id="username" v-model="username" required>
                    </div>
                    <div class="input-container">
                        <i class="fa-sharp fa-solid fa-lock"></i>
                        <input type="password" name="password" placeholder="Password" id="password" v-model="password"
                            required>
                    </div>
                    <p>{{ msg }}</p>
                    <input type="submit" value="login">
                </form>
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
    height: 100vh;
}

.header {
    height: 5vh;
    display: flex;
    justify-content: space-between;
}

.header a,h4 {
    padding: 3% 4%;
    font-size: 30px;
    color: #e57c23;
    transition: 0.3s;
}

.header i:hover {
    color: #e8aa42;
}

.signin {
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

.signin h1 {
    font-size: 3rem;
    color: #025464;
    margin: 0;
}

.signin h4 {
    font-size: 1rem;
    color: #025464;
    margin: 2% 0 7% 0;
}

.signin a {
    color: #e57c23;
}

form {
    display: flex;
    align-items: center;
    flex-direction: column;
}



.signin form input[type="password"],
.signin form input[type="text"] {
    font-size: 1rem;
    font-weight: 500;
    margin: 5% 0;
    display: block;
    min-width: 14rem;
    border: 2px solid #025464;
    padding: 1rem 1rem 1rem 3rem;
}

.signin form input[type="submit"] {
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

.signin form input[type="submit"]:hover {
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
    color: #838889;
}
</style>

<script>
import axios from 'axios'
import $cookies from 'vue-cookies'
import $router from '@/router';

$cookies.config('1h');

export default {
    data() {
        return {
            username: '',
            password: '',
            msg: '',
            signedIn: $cookies.get('user')
        }
    },
    methods: {
        async login() {
            await axios.post(
                `http://localhost:3000/login`, {
                username: this.username,
                password: this.password
            }
            ).then((res) => {
                if (res.data[0].id) {
                    console.log(res.data);
                    $cookies.set('user', res.data[0]);
                    $router.push('/').then(() => {
                        location.reload();
                    })
                } else {
                    this.msg = 'Invalid Username/Password!';
                }
            })
        }
    },
    mounted() {
        let fontScript = document.createElement('script')
        fontScript.setAttribute('src', 'https://kit.fontawesome.com/cb6613d56d.js')
        fontScript.setAttribute('crossorigin', 'anonymous')
        document.head.appendChild(fontScript)
    }
}


</script>