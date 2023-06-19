<template>
    <div class="background">
        <div class="intro">
            <h1>About typefist</h1>
            <h4>TypeFist is an online typing practice platform created to help users enhance their typing speed and
                accuracy. With our community and comprehensive features, we aim to make learning to type an
                engaging and rewarding experience for individuals of all skill levels. Whether you're a student, a
                professional,
                or simply someone looking to improve their typing proficiency, start your typing journey with TypeFist and
                unlock
                your full potential on the keyboard.<br><br></h4>
        </div>
        <div class="creators">
            <h1>Our creators</h1>
            <h4>Typefist, born out of our passion for typing, emerged as the final project for the Web Technology course at
                university. Get to know us better through our socials!
                <br><br>
            </h4>
            <div class="container">
                <div class="row">
                    <div class="card">
                        <h2>Muhammad Afif<br>5027221032</h2><br>
                        <h4>I'm Afif from IT department, I like playing games.<br><br>
                            Average speed: 50 WPM<br>Best speed: 55 WPM</h4>
                        <a href="https://www.linkedin.com/in/afif-muhammad-473818248/" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div class="card">
                        <h2>Jacinta Syilloam<br>5027221036</h2><br>
                        <h4>Hi I'm Jac. I am passionate in visual arts, business, and technology!<br><br>
                            Average speed: 75 WPM<br>Best speed: 98 WPM</h4>
                        <a href="https://www.linkedin.com/in/jacintasyilloam/" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div class="card">
                        <h2>Michael Wayne<br>5027221037</h2><br>
                        <h4>I'm Michael from the IT department, passionate about computer science and typing.<br><br>
                            Average speed: 77 WPM<br>Highest WPM: 94 WPM</h4>
                        <a href="https://www.linkedin.com/in/michael-wayne-84a4bb18a/" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
* {
    font-family: "Inconsolata";
    text-align: left;
}

body {
    margin: 0;
    padding: 0;

    background-color: #025464;
}

.background {
    background-color: #025464;
    height: 160vh;
    padding: 5px 0;
}

h4 {
    font-size: 1rem !important;
}

h1 {
    font-size: 2rem !important;
}

.intro {
    width: 50%;
    margin: 4rem 8%;
    padding: 2rem 2rem;
    color: #025464;
    background-color: #f8f1f1;
    box-shadow: 20px 20px black;
}

.creators {
    margin: 4rem 8%;
    padding: 2rem 2rem;
    color: #025464;
    background-color: #f8f1f1;
    box-shadow: 20px 20px black;
}

.container {
    margin: 1rem;
}

.row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.card {
    background-color: #e8aa42;
    position: relative;
    flex: 1;
    max-width: 20rem;
    height: auto;
    margin: 1rem;
    padding: 1rem 2rem;
}

.card h2 {
    text-align: center;
}

.card h4 {
    margin: 1rem;
    margin-top: 0;
}

i {
    color: #025464;
    font-size: 2rem;
    transition: 0.3s;
}

i:hover {
    scale: 0.9;
}

@media (max-width:1200px) {
    .card {
        flex: 100%;
        max-width: 100%;
    }
    .background {
        background-color: #025464;
        height: 500vh;
        padding: 5px 0;
    }
}
</style>