// ===== VALIDATION FORMULAIRE CONTACT ===== //

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // empêche l'envoi automatique

            // récupérer les valeurs
            const name = form.querySelector("input[placeholder='Votre nom']").value.trim();
            const email = form.querySelector("input[type='email']").value.trim();
            const subject = form.querySelector("input[placeholder='Sujet du message']").value.trim();
            const msg = form.querySelector("textarea").value.trim();

            // validation basique
            if (!name || !email || !subject || !msg) {
                messageBox.style.color = "red";
                messageBox.textContent = "Veuillez remplir tous les champs.";
                return;
            }

            // vérifier email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                messageBox.style.color = "red";
                messageBox.textContent = "Veuillez entrer une adresse email valide.";
                return;
            }

            // succès
            messageBox.style.color = "green";
            messageBox.textContent = "Message envoyé avec succès !";

            // reset
            form.reset();
        });
    }
});
// ===== ANIMATION SUR LES CARTES PROJETS ===== //
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
