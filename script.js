// Déclaration de la fonction handleScrollIndicator qui va permettre de gérer la progression de la barre de scroll
const handleScrollIndicator = () => {
  // Récupération de la div ayant la classe "scroll-indicator"
  const scrollIndicator = document.querySelector("#scroll-indicator");
  const maxHeight = document.body.scrollHeight - window.innerHeight;
  // console.log(maxHeight);

  const widthPercentage = (window.scrollY / maxHeight) * 100;
  // console.log(widthPercentage);

  scrollIndicator.style.width = `${widthPercentage}%`;
  // console.log(scrollIndicator);
};

// Ecoute de l'événement "scroll" sur la fenêtre et appel de la fonction handleScrollIndicator
window.addEventListener("scroll", handleScrollIndicator);
