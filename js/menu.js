function isMobileMenu() {
    return window.matchMedia("(max-width: 700px)").matches;
}

function closeSecondSubmenus(except) {
    var items = document.querySelectorAll(".has-second-submenu.active");
    for (var i = 0; i < items.length; i++) {
        if (items[i] !== except) {
            items[i].classList.remove("active");
        }
    }
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function toggleSubmenu(element, event) {
    if (event) {
        event.stopPropagation();
    }

    if (isMobileMenu()) {
        var keep = element.classList.contains("has-second-submenu") ? element : null;
        closeSecondSubmenus(keep);
    }

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
        if (isMobileMenu()) {
            closeSecondSubmenus(null);
        }
        return;
    }

    if (isMobileMenu() && menu.contains(event.target)) {
        var current = event.target.closest(".has-second-submenu");
        closeSecondSubmenus(current);
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
