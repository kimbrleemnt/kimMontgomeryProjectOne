const button = document.getElementById("hamButton");
const nav = document.getElementById("mainMenu");

button.addEventListener('click', () => {
  nav.classList.toggle('show');


});

/*
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/


//Submit Button Modal https://softauthor.com/make-custom-popup-modal-window-in-vanilla-javascript/#create-a-button-that-opens-pop-up-modal-window

//Show Modal
const openModalButton = document.querySelector('[id=openModal]');
const modalWindowOverlay = document.querySelector('[id=modalOverlay]');

const showModalWindow = () => {
  modalWindowOverlay.style.display = 'flex';
}
openModalButton.addEventListener("click", showModalWindow);


//Hide Modal
const closeModalButton = document.querySelector('[id=close]');

const hideModalWindow = () => {
  modalWindowOverlay.style.display = 'none';
}

closeModalButton.addEventListener("click", hideModalWindow);





//Scroll to Top

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
//https://www.youtube.com/watch?v=MCRV9ajSfoc