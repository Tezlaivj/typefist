<template>
    <div class="sambutan">
        <h1>{{ msg }}</h1>

    </div>
    <div>
        <h4>{{ wpm }}</h4>
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
            wpm:''
        }
    },
    methods: {
        logout() {
            $cookies.remove('user');
            $router.push('/');
        }
    },
    mounted() {
        if(!$cookies.get('user')) {
            $router.push('/')
        } else {
            this.wpm = 'Highest WPM : ' + $cookies.get('user').best_wpm + ' WPM';
            this.msg = 'Halo, ' + $cookies.get('user').username;
        }
    }
}

</script>
