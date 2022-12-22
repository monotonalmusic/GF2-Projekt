function change_page_forside(){
    window.location.href = "/forside/index.html";
  } 
  function change_page_banko(){
    window.location.href = "/Bango/index.html";
  } 
  function change_page_generator(){
    window.location.href = "/Password-generator/index.html";
  } 
  function change_page_reset(){
    window.location.href = "/Password-reset/index.html";
  } 
  





const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});