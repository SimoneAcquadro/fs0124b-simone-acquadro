window.addEventListener("scroll", function () {
    let headers = document.querySelectorAll(".header");
    let buttons = document.querySelectorAll(".btn_title");
    let scrollPos = window.scrollY;

    headers.forEach(function (header) {
        if (scrollPos > 500) {
            header.style.backgroundColor = "white";
        } else {
            header.style.backgroundColor = "#FFC017";
        }
    });

    buttons.forEach(function (button) {
        if (scrollPos > 500) {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "";
        }
    });
});
