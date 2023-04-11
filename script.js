//Hamburger Dropdown Menu

const button = document.getElementById("hamButton");
const nav = document.getElementById("mainMenu");

button.addEventListener('click', () => {
  nav.classList.toggle('show');


});


// Popup Modal - Contact page, click the Submit button (you have to click twice tho lol)

const formElement = document.querySelector('form');
formElement.addEventListener('click', (e) => {
  e.preventDefault();

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".closeButton");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);


});
//https://sabe.io/tutorials/how-to-create-modal-popup-box


//Scroll to Top

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
//https://www.youtube.com/watch?v=MCRV9ajSfoc