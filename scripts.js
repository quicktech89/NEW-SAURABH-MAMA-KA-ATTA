document.addEventListener("DOMContentLoaded", function () {
  // Loader
  const loader = document.getElementById('loader');
  window.onload = function () {
    loader.style.display = 'none';
  };

  // Language Switcher
  const langButtons = document.querySelectorAll('.language-switch button');
  langButtons.forEach(button => button.addEventListener('click', (e) => {
    langButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    document.body.style.fontFamily = e.target.id === 'lang-en' ? "'Montserrat', sans-serif" : "'Noto Sans Devanagari', sans-serif";
  }));

  // AOS Init
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
