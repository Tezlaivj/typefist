<template>
    <div class="article">
    <div class="bg">
        <div class="box">
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
    </div>
    </div>
</template>
    
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');

.article * {
    padding: 0;
    margin: 0;
    font-family: 'Inconsolata', monospace;
}

.article .bg {
    background-color: #E8AA42;
}

.article .box {
    background-color: #F8F1F1;
    padding: 5% 0;
}

.article .top {
    display: flex;
    margin: 0 20%;
}

.article .clock {
    width: 30%;
    padding: 0 5%;
}

.article .formula-1 {
    width: 40%;
}

.article .formula-2 {
    width: 60%;
}

.article h1 {
    color: #025464 !important;
    font-weight: 600;
    font-size: 200%;
    text-align: left;
}

.article .title {
    margin: auto;
}

.article p {
    color: #025464 !important;
    padding: 2% 15%;
    font-size: 100%;
    font-weight: 600;
    text-align: left;
}

.article ::-webkit-scrollbar {
    width: 5px;
}


/* Handle */
.article ::-webkit-scrollbar-thumb {
    background: #025464;
    border-radius: 0;
}
</style> 