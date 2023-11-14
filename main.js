const navBar = document.querySelector(".navbar");
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  let currScrollPos = window.scrollY;

  if (currScrollPos > prevScrollPos) {
    navBar.style.transform = `translateY(-105%)`;
  } else {
    navBar.style.transform = `translateY(0%)`;
  }

  prevScrollPos = currScrollPos;
});


const bloque = document.querySelector("footer");

bloque.addEventListener("click", () =>{
  bloque.style.backgroundColor = 'blue'
});


const bloqueWhoIAm= document.querySelector(".mydescription-container")
const bloqueWhatIDo = document.querySelector(".moredescription")
const descripcionButton = document.querySelector(".readMoreBtn");
const backDescripcionButton = document.querySelector(".backBtn");

bloqueWhatIDo.hidden = true

function showMoreAboutMe (){
  bloqueWhoIAm.hidden=true;
  bloqueWhatIDo.hidden=false;
}

function backToWhoIAm (){
  bloqueWhatIDo.hidden=true;
  bloqueWhoIAm.hidden=false;
}

/*Tester 

function changeBackground (){
  backDescripcionButton.style.backgroundColor = 'green';

}


descripcionButton.addEventListener("mouseenter", (changeBackground));*/
descripcionButton.addEventListener('click',(showMoreAboutMe));
backDescripcionButton.addEventListener('click',(backToWhoIAm));