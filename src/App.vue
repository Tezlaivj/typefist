<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.typing-text p {
    font-size: 21px;
    text-align: justify;
    letter-spacing: 1px;
}

.typing-text p span {
    position: relative;
}

span.correct {
    color: whitesmoke;
}

span.incorrect {
    color: red;
    border-radius: 4px;
}

@keyframes blink {
    50% {
        opacity: 1;
    }
}

span.active::before {
    position: absolute;
    color: whitesmoke;
    content: "";
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    border-radius: 5px;
    background: #E8AA42;
    opacity: 0;
    animation: blink 1s ease-in-out infinite;
}
</style>

