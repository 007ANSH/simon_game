let gameSeq = [];
let userSeq = [];
let h3 = document.querySelector("h3");
let clr = ["yellow", "red", "green", "purple"];
let highScr = 0;

let started = false;
let level = 0;
let h4 = document.querySelector("h4");
let allBtn = document.querySelectorAll(".btn");


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log('game is started');
        started = true;
        levelUp();
    }

})
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randomClr = clr[randomIdx];
    let randomBtn = document.querySelector(`.${randomClr}`)
    btnFlash(randomBtn);
    gameSeq.push(randomClr);
    console.log(gameSeq);

}
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100)


}
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == level) {
            setTimeout(levelUp, 800)
        }
    }
    else {
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";


        }, 150)
        h3.innerHTML = `Game Over, Your score is<b> ${level} <br/> <br> Press any key to start`;
        if (level > highScr) {
            highScr=level;
            h4.innerText = `Highest score is ${highScr}`
        } started = false;
        level = 0;
        gameSeq = [];


    }

}
function userFlash() {
    let btn = this;
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200)
    let btnCol = btn.getAttribute("id");
    userSeq.push(btnCol);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
}
for (btn of allBtn) {
    btn.addEventListener("click", userFlash)
}