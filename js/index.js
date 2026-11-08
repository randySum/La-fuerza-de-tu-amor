
document.addEventListener("DOMContentLoaded", () => {

    // DESPLAZAMIENTO SUAVE
    const links = document.querySelectorAll(
        ".page a[href^='#']"
    );

    links.forEach(link => {
        link.addEventListener("click", function(e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });
    });


    // FORMULARIO DE CONTACTO
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (form) {

        form.addEventListener("submit", function(e) {

            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;

            const destinatario = "email@gmail.com";

            const asunto = encodeURIComponent(
                "Nuevo mensaje desde la web"
            );

            const cuerpo = encodeURIComponent(
                "Nombre: " + nombre +
                "\nCorreo: " + email +
                "\n\nMensaje:\n" + mensaje
            );

            const mailto =
                `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;

            formMessage.textContent =
                "Se está preparando tu correo. Si no se abre, revisa tu aplicación de correo.";

            window.location.href = mailto;

        });

    }

});
