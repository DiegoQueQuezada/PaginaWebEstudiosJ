let swiper = new Swiper('.card_content', {
  // Parámetros opcionales
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  // Paginación
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Corregido
    dynamicBullets: true
  },
  // Flechas de navegación
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Configuración responsive
  breakpoints: {
    600: {
      slidesPerView: 2, // Corregido
    },
    968: {
      slidesPerView: 3, // Corregido
    }
  }
});
document.getElementById('icono_menu').addEventListener("click", function () {
  console.log("funca");
  var navegador_lista = document.getElementById('navegador_envolvente2');
  navegador_lista.classList.toggle("deslizante");
});
const nav = document.getElementById("navegador");
const trigger = document.getElementById("trigger");
window.addEventListener("scroll", () => {
  const triggerTop = trigger.getBoundingClientRect().top;
  if (triggerTop <= 0) {
    nav.classList.add("black");
  } else {
    nav.classList.remove("black");
  }
});