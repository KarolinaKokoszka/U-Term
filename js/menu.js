function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function toggleSubmenu(element) {
    element.classList.toggle("active");
}

document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    var toggleButton = document.querySelector(".menu-toggle");

    if (!menu || !toggleButton) {
        return;
    }

    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove("show");
    }
});

function bindContactLink() {
    var menu = document.getElementById("menu");
    var contactLink = document.querySelector("#menu a[href='#contact']");

    if (!menu || !contactLink) {
        return;
    }

    contactLink.addEventListener("click", function () {
        menu.classList.remove("show");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindContactLink);
} else {
    bindContactLink();
}
