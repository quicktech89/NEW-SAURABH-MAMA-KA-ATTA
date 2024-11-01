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
  
    // Sound Button Logic
    const soundButton = document.querySelector('.sound-button');
    const sound = document.getElementById('sound');
  
    soundButton.addEventListener('click', () => {
        if (sound.paused) {
            sound.currentTime = 0; // Reset to start
            sound.play();
            soundButton.querySelector('.sound-icon').classList.add('playing'); // Add pulsating class
        } else {
            sound.currentTime = 0; // Reset to start to replay
            sound.play();
            soundButton.querySelector('.sound-icon').classList.add('playing'); // Add pulsating class
        }
  
        // Remove the playing class after sound ends
        sound.addEventListener('ended', () => {
            soundButton.querySelector('.sound-icon').classList.remove('playing');
        });
    });
  
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
  
    // Close the nav menu when a link is clicked (for mobile experience)
    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
  
    // Smooth Scroll to Top Function
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    // Chatbot Integration
    window.embeddedChatbotConfig = {
        chatbotId: "Dckk3vHbb6Zw6uX1t4lVU",
        domain: "www.chatbase.co"
    };
  
    // Load Chatbot Script
    const chatbotScript = document.createElement('script');
    chatbotScript.src = "https://www.chatbase.co/embed.min.js";
    chatbotScript.setAttribute("chatbotId", "Dckk3vHbb6Zw6uX1t4lVU");
    chatbotScript.setAttribute("domain", "www.chatbase.co");
    chatbotScript.defer = true;
    document.body.appendChild(chatbotScript);
  });
  const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    const heroSectionHeight = document.querySelector('.hero-section').offsetHeight;
    const secondSectionHeight = document.querySelector('.second-section').offsetHeight;
    
    if (window.scrollY > heroSectionHeight + secondSectionHeight) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
