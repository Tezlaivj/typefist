<template>
    <div class="article">
        <div class="top">
            <img class="clock" src="../views/images/pixelarticons_speed-fast.svg">
            <div class="title">
                <h1>How to Calculate Typing Speed (WPM)</h1>
            </div>
        </div>

        <div>
            <p>Gross, or Raw WPM (Words Per Minute) is a calculation of exactly how fast you type with no error
                penalties.
                The
                gross typing speed is calculated by taking all words typed and dividing by the time it took to type the
                words in
                minutes.</p>
            <img class="formula-1" src="../views/images/Group5.svg">
            <p>A Net WPM calculation is preferred for measuring typing speed as opposed to the Gross WPM computation
                since
                including mistakes will give a more complete picture of your true typing abilities. However, Gross WPM
                is
                used
                in the calculation of the Net WPM calculation which merits its mention.</p>
            <img class="formula-2" src="../views/images/Group2.svg">
        </div>
    </div>
</template>
    
<script>
export default {
}
</script>
    
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');

* {
    padding: 0;
    margin: 0;
    font-family: 'Inconsolata', monospace;
}

body {
    background-color: #E8AA42;
}

.article {
    padding: 5% 0%;
    margin: 2% 15%;
    background-color: #F8F1F1;
    box-shadow: 16px 16px #2E2E2E;
}

.top {
    display: flex;
    margin: 0 20%;
}

.clock {
    width: 30%;
    padding: 0 5%;
}

.formula-1 {
    width: 50%;
}

.formula-2 {
    width: 70%;
}

h1 {
    color: #025464 !important;
    font-weight: 600;
    font-size: 150%;
    text-align: left;
}

.title {
    margin: auto;
}

p {
    color: #025464 !important;
    padding: 2% 7.5%;
    font-size: 100%;
    font-weight: 600;
    text-align: left;
}

::-webkit-scrollbar {
    width: 10px;
}


/* Handle */
::-webkit-scrollbar-thumb {
    background: #025464;
    border-radius: 0;
}

@media only screen and (max-width: 700px) {

    .article {
        box-shadow: 16px 16px #2E2E2E !important;
    }

    .formula-1 {
        width: 85%;
    }

    .formula-2 {
        width: 85%;
    }

    .article {
        padding: 5% 0%;
        margin: 2% 8%;
        background-color: #F8F1F1;
        box-shadow: 16px 16px;
    }

    .top {
        display: flex;
        margin: 0 7.5%;
    }
    
    .clock {
        display: none;
    }

}
</style> 