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
  var navegador_lista = document.getElementById('navegador_lista');
  navegador_lista.classList.toggle("deslizante");
});