<template>
    <div class="gamu">
        <div class="wrapper">
            <input type="text" class="input-field">
            <div class="content-box">
                <div class="typing-text">
                    <p id="paragraph"></p>
                </div>
                <div class="content">
                    <ul class="result-details">
                        <li class="time">
                            <p>Time:</p><span><b>60</b>s</span>
                        </li>
                        <li class="mistake">
                            <p>Mistakes: </p><span>0</span>
                        </li>
                        <li class="wpm">
                            <p>WPM: </p><span>0</span>
                        </li>
                        <li class="cpm">
                            <p>CPM: </p><span>0</span>
                        </li>
                    </ul>
                    <button>Try Again!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

window.addEventListener("load", function () {
    const $cookies = require('vue-cookies');
    const axios = require('axios');
    const SignedIn = $cookies.get('user');

    const paragraph = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis tempor orci in consectetur. Fusce viverra est eget nunc placerat scelerisque. Morbi quis ipsum gravida, vulputate nunc a, faucibus urna. Proin consectetur sed tellus id dictum. Integer eros nisl, aliquam elementum laoreet id, finibus non enim. Sed et ullamcorper nunc, ut ornare justo. Cras in tellus lectus. In hac habitasse platea dictumst. Aenean vestibulum orci nec ultrices vestibulum. Pellentesque interdum enim eu risus sollicitudin gravida nec non dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        "Nullam placerat dapibus vehicula. Curabitur eu auctor mauris, a congue augue. Nullam a posuere risus. Morbi convallis mauris nunc. Quisque congue, nisl nec aliquet suscipit, orci urna dapibus tellus, id bibendum magna ligula sed diam. Donec quis consequat libero, dignissim dictum est. Praesent sit amet nunc rhoncus, vehicula lorem sed, pretium ligula. Aenean pellentesque nisl quis mauris sodales, ut fringilla nulla molestie.",
        "Phasellus a dictum risus, sed facilisis turpis. Morbi suscipit metus et massa consectetur, non bibendum massa venenatis. Pellentesque sagittis quis nibh ac malesuada. Aliquam sed orci nec augue faucibus dapibus. Nulla tempus pellentesque nunc in auctor. Quisque egestas fermentum quam, id sagittis nisl tincidunt at. Fusce a est mollis, porta neque ut, malesuada nisi.",
        "Nulla at urna ipsum. Pellentesque pellentesque lorem condimentum consectetur iaculis. Vivamus aliquet elit elit, non fringilla felis feugiat at. Sed vel commodo erat. Duis pretium tincidunt interdum. Phasellus ut augue quis libero vulputate fringilla placerat vel nulla. Sed at faucibus lectus, et placerat mauris. Cras interdum sapien ac nulla commodo, gravida luctus magna consequat.",
        "Integer at sagittis turpis. Praesent at est ac ante luctus ultrices. Mauris lorem diam, vulputate a dolor a, volutpat tempor erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tempor vel nibh eget viverra. Maecenas in quam mauris. Nulla sodales semper lacus eget aliquet. Integer imperdiet dui neque, eget dapibus metus dignissim sed. Mauris eu pharetra tellus, ut lobortis nunc. Morbi imperdiet lacinia lectus vitae euismod. Vivamus venenatis ante varius libero rutrum scelerisque id non urna."
    ];

    const typingtext = document.querySelector(".typing-text p")
    const inpField = document.querySelector(".wrapper .input-field")
    const tryAgainBtn = document.querySelector(".content button")
    const timeTag = document.querySelector(".time span b")
    const mistakeTag = document.querySelector(".mistake span")
    const wpmTag = document.querySelector(".wpm span")
    const cpmTag = document.querySelector(".cpm span")

    let timer;
    let maxTime = 60;
    let timeLeft = maxTime;
    let isTyping = 0;
    let mistakes = isTyping;
    let charIndex = mistakes;

    const gameOn = document.querySelector(".gamu");

    function loadParagraph() {
        if (gameOn) {
            const ranIndex = Math.floor(Math.random() * paragraph.length);
            typingtext.innerHTML = "";
            paragraph[ranIndex].split("").forEach(char => {
                let span = `<span>${char}</span>`
                typingtext.innerHTML += span;
            });

            typingtext.querySelectorAll("span")[0].classList.add("active");
            document.addEventListener("keydown", () => inpField.focus());
            typingtext.addEventListener("click", () => inpField.focus());
        }
    }

    function initTyping() {
        let characters = typingtext.querySelectorAll("span");
        let typedChar = inpField.value.split("")[charIndex];
        if (charIndex < characters.length - 1 && timeLeft > 0) {
            if (!isTyping) {
                timer = setInterval(initTimer, 1000);
                isTyping = true;
            }
            if (typedChar == null) {
                if (charIndex > 0) {
                    charIndex--;
                    if (characters[charIndex].classList.contains("incorrect")) {
                        mistakes--;
                    }
                    characters[charIndex].classList.remove("correct", "incorrect");
                }
            } else {
                if (characters[charIndex].innerText == typedChar) {
                    characters[charIndex].classList.add("correct")
                } else {
                    mistakes++;
                    characters[charIndex].classList.add("incorrect");
                }
                charIndex++;
            }
            characters.forEach(span => span.classList.remove("active"));
            characters[charIndex].classList.add("active");

            let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
            if (wpm < 0 || !wpm || wpm === Infinity || wpm == null) {
                wpm = 0;
                wpmTag.innerText = wpm;
            } else {
                wpmTag.innerText = wpm;
            }

            mistakeTag.innerText = mistakes;
            cpmTag.innerText = charIndex - mistakes;


        } else {
            clearInterval(timer);
            inpField.value = "";
            if (SignedIn) {
                const newWPM = wpmTag.innerText;
                console.log(newWPM);
                if (newWPM > $cookies.get('user').best_wpm) {
                    const username = $cookies.get('user').username;
                    console.log(newWPM);
                    axios.post(
                        'http://localhost:3000/wpmupdate',{
                            newWPM, username
                        }).then((res)=>{
                            if(res.data[0]) {
                                $cookies.remove('user');
                                $cookies.set('user', res.data[0]);
                            }
                        })
                }
                inpField.removeEventListener("input", initTyping);
            }
        }
    }

    function initTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            timeTag.innerText = timeLeft;
            let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
            if (wpm < 0 || !wpm || wpm === Infinity || wpm == null) {
                wpm = 0;
                wpmTag.innerText = wpm;
            } else {
                wpmTag.innerText = wpm;
            }

        } else {
            clearInterval(timer);
        }
    }

    function resetGame() {
        loadParagraph();
        inpField.addEventListener("input", initTyping);
        clearInterval(timer);
        timeLeft = maxTime;
        isTyping = 0;
        mistakes = isTyping;
        charIndex = mistakes;
        inpField.value = "";
        timeTag.innerText = timeLeft;
        wpmTag.innerText = 0;
        mistakeTag.innerText = 0;
        cpmTag.innerText = 0;
    }

    if (gameOn) {
        loadParagraph();
        inpField.addEventListener("input", initTyping);
        tryAgainBtn.addEventListener("click", resetGame);
    }
})

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');

.gamu * {
    margin: 0;
    padding: 0;
    font-family: 'Inconsolata', monospace;
    box-sizing: border-box;
}

.gamu {
    display: flex;
    padding: 0 10%;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    background-color: #E8AA42;
}

#paragraph {
    color: #00FFCA !important;
}

.result-details {
    color: white;
}

::selection {
    color: white;
    background: #E8AA42;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 3%;
    background: #1e1e1e;
    border-radius: 10px;
}

.wrapper .input-field {
    opacity: 0%;
    z-index: -999;
    position: absolute;
}

.wrapper .content-box {
    margin: 0%;
    padding: 1% 3% 0;
    width: 95%;
    border-radius: 10px;
    border: 3px solid #E8AA42;
}

.content-box .typing-text {
    overflow: hidden;
    max-height: 160px;
}

.typing-text::-webkit-scrollbar {
    width: 0;
}

.content-box .content {
    margin-top: 3%;
    display: flex;
    padding: 3% 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-top: 3px solid #E8AA42;
}

.content button {
    outline: none;
    border: none;
    width: 14%;
    color: #E8AA42;
    padding: 1% 0;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 15px;
    border: 3px solid #E8AA42;
    background: none;
    transition: transform 0.2s ease;
}

.content button:active {
    transform: scale(0.9);
}

.content button:hover {
    background: whitesmoke;
    transform: scale(1.1);
}

.content .result-details {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 80%;
    justify-content: space-between;
}

.result-details li {
    display: flex;
    height: 5%;
    list-style: none;
    position: relative;
    align-items: center;
}

.result-details li:not(:first-child) {
    padding-left: 8%;
    border-left: 2px solid white;
}

.result-details li p {
    color: #00FFCA !important;
    font-size: 15px;
}

.result-details li span {
    display: block;
    font-size: 17px;
    margin-left: 10%;
}

li span b {
    font-weight: 500;
}

li:not(:first-child) span {
    font-weight: 500;
}

@media (max-width: 745px) {
    .wrapper {
        padding: 5%;

    }

    .content-box .content {
        padding: 5% 0;
    }

    .content-box .typing-text {
        max-height: 100%;
    }

    .typing-text p {
        font-size: 19px;
    }

    .content button {
        width: 100%;
        font-size: 15px;
        padding: 5% 0;
        margin-top: 15%;
    }

    .content .result-details {
        width: 100%;
    }

    .result-details li:not(:first-child) {
        border-left: 0;
        padding: 0;
    }

    .result-details li p,
    .result-details li span {
        font-size: 17px;
    }
}

@media (max-width: 510px) {
    .wrapper .content-box {
        padding: 5% 7% 0;
    }

    .typing-text p {
        font-size: 13px;
    }

    .result-details li {
        margin-bottom: 5%;
    }

    .content button {
        margin-top: 5%;
    }
}
</style>