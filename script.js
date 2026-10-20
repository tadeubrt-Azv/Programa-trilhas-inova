const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("aberto");

    const aberto = menu.classList.contains("aberto");

    menuBtn.setAttribute("aria-expanded", aberto);
    menuBtn.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});
