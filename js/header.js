// Wspólny nagłówek: logo, menu i szybki kontakt. Edycja tutaj aktualizuje każdą stronę.
(function () {
    var html = `
        <a class="logo" href="index.html">U-Term</a>

    <header>
        <nav>
            <div class="menu-toggle" onclick="toggleMenu()">☰</div>
            <ul id="menu">
                <li><a href="index.html">Home</a></li>
                <li class="has-submenu" onclick="toggleSubmenu(this, event)">
                    <a>Usługi</a>
                    <ul class="submenu">
                        <li><a href="service2.html">Mobilna obróbka skrawaniem</a></li>
                        <li><a href="service4.html">Przemysł</a></li>
                        <li class="has-second-submenu" onclick="toggleSubmenu(this, event)">
                            <a>Usługi warsztatowe</a>
                            <ul class="second-submenu">
                                <li><a href="service1.html">Obróbka CNC</a></li>
                                <li><a href="service3.html">Spawanie</a></li>
                                <li><a href="service5.html">Remonty maszyn budowlanych</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="realizacje.html">Realizacje</a></li>
                <li><a href="gallery.html">Galeria</a></li>
                <li><a href="about_us.html">O nas</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <div class="quick-contact" aria-label="Szybki kontakt">
        <a class="quick-contact__btn quick-contact__btn--phone"
        href="tel:+48503401890"
        aria-label="Zadzwoń: 503 401 890">
            <i class="fas fa-phone" aria-hidden="true"></i>
        </a>
        <a class="quick-contact__btn quick-contact__btn--whatsapp"
        href="https://wa.me/48503401890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Napisz na WhatsApp">
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
        </a>
    </div>
`;

    var script = document.currentScript;
    script.insertAdjacentHTML("beforebegin", html);
    script.remove();
})();
