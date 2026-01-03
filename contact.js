const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

// Remplace xxxx par l’ID Formspree (ex: https://formspree.io/f/abcdwxyz)
const formEndpoint = "https://formspree.io/f/mgovovjb";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  status.textContent = "Envoi en cours...";

  const formData = new FormData(form);

  fetch(formEndpoint, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        status.textContent = "Message envoyé ✔️";
        form.reset();
      } else {
        status.textContent = "Erreur : message non envoyé. Réessaie.";
      }
    })
    .catch(() => {
      status.textContent = "Erreur réseau : vérifie ta connexion.";
    });
});
