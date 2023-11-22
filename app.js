let searchInput = document.querySelector(".searchbar-input");
let searchCheck = document.querySelector(".searchbar-check");
let planClose = document.querySelector(".plan-close");
let planCheck = document.querySelector(".plan-check");
let guideArrow = document.querySelector(".arrow img");
let guideCheck = document.querySelector(".guide-check");

let option1 = document.querySelector(".option-1");
let option2 = document.querySelector(".option-2");
let option3 = document.querySelector(".option-3");
let option4 = document.querySelector(".option-4");
let option5 = document.querySelector(".option-5");

let check1 = document.querySelector(".check-1");
let check2 = document.querySelector(".check-2");
let check3 = document.querySelector(".check-3");
let check4 = document.querySelector(".check-4");
let check5 = document.querySelector(".check-5");

let alertBell = document.querySelector(".bell-icon");
let alertCheck = document.querySelector(".alert-check");

let profile = document.querySelector(".noti-shop");
let pic = document.querySelector(".noti-pic");
let menuCheck = document.querySelector(".menu-check");

let doneCont1 = document.querySelector(".done-container-1");
let doneCont2 = document.querySelector(".done-container-2");
let doneCont3 = document.querySelector(".done-container-3");
let doneCont4 = document.querySelector(".done-container-4");
let doneCont5 = document.querySelector(".done-container-5");

let done1 = document.querySelector(".done-1");
let done2 = document.querySelector(".done-2");
let done3 = document.querySelector(".done-3");
let done4 = document.querySelector(".done-4");
let done5 = document.querySelector(".done-5");

let bar = document.querySelector(".loading-bar");
let num = document.querySelector(".loading-num")

searchInput.addEventListener("focus", function() {
    searchCheck.checked = true;
})

searchInput.addEventListener("blur", function() {
    searchCheck.checked = false;
})

planClose.addEventListener("click", function() {
    planCheck.checked = true;
})

guideArrow.addEventListener("click", function() {
    guideCheck.checked = !(guideCheck.checked)

    if(guideCheck.checked == true) {
        guideArrow.src = "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg"
    }
    else {
        guideArrow.src = "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg"
    }
})

option1.addEventListener("click", function() {
    option(0);
})

option2.addEventListener("click", function() {
    option(1);
})

option3.addEventListener("click", function() {
    option(2);
})

option4.addEventListener("click", function() {
    option(3);
})

option5.addEventListener("click", function() {
    option(4);
})

alertBell.addEventListener("click", function() {
    alertCheck.checked = !(alertCheck.checked);

    if(menuCheck.checked == true) {
        menuCheck.checked = false;
    }
})

profile.addEventListener("click", function() {
    menuCheck.checked = !(menuCheck.checked);

    if(alertCheck.checked == true) {
        alertCheck.checked = false;
    }
})

pic.addEventListener("click", function() {
    menuCheck.checked = !(menuCheck.checked);

    if(alertCheck.checked == true) {
        alertCheck.checked = false;
    }
})

doneCont1.addEventListener("click", function() {
    done1.checked = !(done1.checked);
    updatebar();
})

doneCont2.addEventListener("click", function() {
    done2.checked = !(done2.checked);
    updatebar();
})

doneCont3.addEventListener("click", function() {
    done3.checked = !(done3.checked);
    updatebar();
})

doneCont4.addEventListener("click", function() {
    done4.checked = !(done4.checked);
    updatebar();
})

doneCont5.addEventListener("click", function() {
    done5.checked = !(done5.checked);
    updatebar();
})

function updatebar() {
    let count = 0;
    let arr = [done1, done2, done3, done4, done5];

    for(let i=0; i<=4; i++) {
        if(arr[i].checked == true) {
            count++;
        }
    }

    bar.style.width = `${count/5*100}%`
    num.innerHTML = count;
}

function option(x) {
    let arr=[check1, check2, check3, check4, check5];

    for(let i=0; i<=4; i++) {
        if(i == x) {
            arr[i].checked = true;
        }
        else {
            arr[i].checked = false;
        }
    }
}