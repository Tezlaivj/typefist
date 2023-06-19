<template>
    <div class="header">
            <h4><i class="fa fa-keyboard"></i> Typefist</h4>
            <a href="/"><i class="fa-sharp fa-solid fa-house"></i></a>
        </div>
    <div class="sambutan">
        <h1>Halo, {{ msg }}</h1>

    </div>
    <div class="datauser">
        <h4>Id: {{ id }}</h4>
        <h4>Email: {{ email }}</h4>
        <h4>Highest WPM: {{ wpm }} WPM</h4>
    </div>
    <button v-on:click="logout" class="keluar">Logout!</button>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');

.header {
    height: 5vh;
    display: flex;
    justify-content: space-between;
}

.header a,h4 {
    padding: 3% 4%;
    font-size: 30px;
    color: #025464;
    transition: 0.3s;
}

.header i:hover {
    color: #0f7e94;
}

.sambutan {
    margin-top: 4%;
}
.sambutan h1 {
    color: #272626 !important;
    font-weight: 600;
    font-size: 200%;
    text-align: center;
}
.datauser {
    margin-top: 3%;
}

.datauser h4{
    margin-top: -3%;
    margin-bottom: -2%;
}
.keluar {
    width: fit-content;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    background-color: #e57c23;
    color: #f8f1f1;
    margin-top: 4%;
    padding: 1% 2% !important;
    transition: 0.3s;
}

.keluar:hover {
    width: fit-content;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    background-color: #e57c23;
    color: #f8f1f1;
    margin-top: 4%;
    padding: 1% 2% !important;
    scale: 0.9;
    box-shadow: 8px 8px black;
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
