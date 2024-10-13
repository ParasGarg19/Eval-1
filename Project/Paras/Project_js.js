function imageClicked1() {
    window.location.href = "Event Details_Page.html";
}

function imageClicked2() {
    window.location.href = "Event Details_Page_2.html";
}

function imageClicked3() {
    window.location.href = "Event Details_Page_3.html";
}

function imageClicked4() {
    window.location.href = "Event Details_Page_4.html";
}

function imageClicked5() {
    window.location.href = "Event Details_Page_5.html";
}

function imageClicked6() {
    window.location.href = "Event Details_Page_6.html";
}

function imageClicked7() {
    window.location.href = "Event Details_Page_7.html";
}

function imageClicked8() {
    window.location.href = "Event Details_Page_8.html";
}

function imageClicked9() {
    window.location.href = "Event Details_Page_9.html";
}

function Club_Clicked(){
    window.location.href = "form.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const fadeTexts = ["Welcome to Eventex", "Inspire Creativity", "Explore New Possibilities"];
    let currentTextIndex = 0;
    const textElement = document.getElementById("fade-text");

    function changeText() {
        textElement.textContent = fadeTexts[currentTextIndex];
        textElement.style.opacity = 1;

        setTimeout(function() {
            textElement.style.opacity = 0;
            currentTextIndex = (currentTextIndex + 1) % fadeTexts.length;
        }, 3000);
    }

    setInterval(changeText, 4000);
    changeText();
});
