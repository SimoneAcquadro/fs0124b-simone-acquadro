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

window.addEventListener('scroll', function() {
    let fixedDiv = document.querySelector('.fixed');
    let scrollPos = window.scrollY;

    // Verifica se la posizione dello scroll è oltre una certa soglia
    if (scrollPos > 800) { // Esempio: fissa il div dopo che lo scroll ha superato i 300 pixel
        fixedDiv.classList.add('fixed_active'); // Aggiunge la classe per fissare il div
    } else {
        fixedDiv.classList.remove('fixed_active'); // Rimuove la classe quando si ritorna sotto la soglia
    }
});
