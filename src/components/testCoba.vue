<template>
    <div class="tescoba">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="/"><i class="fa bi bi-keyboard fa-bounce"></i> typefist</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a target="_blank" class="nav-link" href="https://discord.gg/2YcKwwT5">community</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/about">about us</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/profile">
                            <template v-if="username">{{ `Hi, ${username}` }}</template>
                            <template v-else>Sign in</template>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
  
<script>
import $cookies from 'vue-cookies'

export default {
    data() {
        return {
            username: '',
        };
    },
    created() {
        const signedIn = $cookies.get('user');
        if (signedIn) {
            this.username = $cookies.get('user').username;
        }
    },
    mounted() {
        let fontScript = document.createElement('script');
        fontScript.setAttribute('src', 'https://kit.fontawesome.com/cb6613d56d.js');
        fontScript.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(fontScript);
    },
};
</script>
  
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');

.tescoba * {
    font-family: 'Inconsolata', monospace;
    font-size: 105%;
    color: #2E2E2E !important;
}

.tescoba .navbar-brand {
    font-size: 130%;
    color: #025464 !important;
}

.tescoba nav {
    background-color: #E8AA42;
}

.tescoba i {
    color: #025464 !important;
}

.tescoba li {
    text-decoration: underline;
    padding-left: 1rem;
    text-align: left;
}

.tescoba a:hover {
    text-decoration: none;
    color: #025464;
}
</style>
  
  