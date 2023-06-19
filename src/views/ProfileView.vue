<template>
    <div class="sambutan">
        <h1>Halo, {{ msg }}</h1>

    </div>
    <div>
        <h4>Id: {{ id }}</h4>
        <h4>Email: {{ email }}</h4>
        <h4>Highest WPM: {{ wpm }} WPM</h4>
    </div>
    <button v-on:click="logout" class="keluar">Logout!</button>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');
.sambutan {
    margin-top: 1%;
    margin-bottom: 5%;
}
.sambutan h1 {
    color: #272626 !important;
    font-weight: 600;
    font-size: 200%;
    text-align: center;
}
button .keluar {
    width: fit-content;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    background-color: #e57c23;
    color: #f8f1f1;
    margin-top: 8%;
    padding: 5% 8%;
}
</style>

<script>
import $cookies from 'vue-cookies'
import $router from '@/router';

export default {
    data() {
        return {
            msg: '',
            wpm:'',
            id:'',
            email:''
        }
    },
    methods: {
        logout() {
            $cookies.remove('user');
            $router.push('/').then(()=>{
                location.reload();
            })
        }
    },
    mounted() {
        if(!$cookies.get('user')) {
            $router.push('/login');
        } else {
            this.id = $cookies.get('user').id;
            this.email = $cookies.get('user').email;
            this.wpm = $cookies.get('user').best_wpm;
            this.msg = $cookies.get('user').username;
        }
    }
}

</script>
