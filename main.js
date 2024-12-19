// Sélectionner tous les boutons de l'accordéon
const accordionButtons = document.querySelectorAll(".accordion button");

// Fonction pour basculer l'état de l'accordéon
function toggleAccordion() {
  const isExpanded = this.getAttribute("aria-expanded") === "true";

  // Fermer tous les éléments de l'accordéon
  accordionButtons.forEach((button) =>
    button.setAttribute("aria-expanded", "false")
  );

  // Si l'élément actuel était fermé, l'ouvrir
  if (!isExpanded) {
    this.setAttribute("aria-expanded", "true");
  }
}

// Ajouter un gestionnaire d'événement pour chaque bouton
accordionButtons.forEach((button) =>
  button.addEventListener("click", toggleAccordion)
);
