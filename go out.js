document.addEventListener('DOMContentLoaded', function() {
    function moveNoButton() {
      // The "No" button moves continuously in random places
      var noButton = document.querySelector('.no-option');
      var maxX = window.innerWidth - noButton.clientWidth;
      var maxY = window.innerHeight - noButton.clientHeight;
  
      var randomX = Math.floor(Math.random() * maxX);
      var randomY = Math.floor(Math.random() * maxY);
  
      noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
  
    function congratulate() {
      alert('Congratulations! We are dating. Looking forward to our time together!');
    }
  
    document.querySelector('.yes-option').addEventListener('click', congratulate);
    document.querySelector('.no-option').addEventListener('mouseover', moveNoButton);
  });
  