// Wspólna sekcja kontaktu. Edycja tutaj aktualizuje każdą stronę.
(function () {
    var html = `
    <section class="contact-info" id="contact">
        <div class="left">
            <div class="logo2">
                U-Term
            </div>
            <p><i class="fas fa-phone"></i> &nbsp; 503 401 890</p>
            <p><i class="fas fa-envelope"></i> &nbsp; biuro.uterm@gmail.com</p>
            <p><i class="fas fa-map-marker-alt"></i> &nbsp; 32-651 Oświęcim, ul. Grobelna 6</p>
            <p><a>NIP:</a> &nbsp; 5491327806</p>
        </div>
        <div class="right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.197937007718!2d19.29060941073837!3d50.02638677139545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716948c15ad5251%3A0xd23ae691dc8fdfdd!2sGrobelna%206%2C%2032-651%20O%C5%9Bwi%C4%99cim!5e0!3m2!1spl!2spl!4v1738694750681!5m2!1spl!2spl" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
`;

    var script = document.currentScript;
    script.insertAdjacentHTML("beforebegin", html);
    script.remove();
})();
