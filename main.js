const navBar = document.querySelector(".navbar");
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  let currScrollPos = window.scrollY;

  if (currScrollPos > prevScrollPos) {
    navBar.style.transform = `translateY(-100px)`;
  } else {
    navBar.style.transform = `translateY(0%)`;
  }

  prevScrollPos = currScrollPos;
});

/*Nav Bar drop down Menu Button*/
const menuBtn= document.querySelector(".menu-btn")
const dropdownMenu = document.querySelector('.dropdown-menu')
const hideBtn = document.querySelector('.hide-btn')
let lastScrollY= window.scrollY;

function displayMenu (){
  dropdownMenu.style.display='block'
 }

 function hideMenu (){
  dropdownMenu.style.display='none'
 }
 

menuBtn.addEventListener('click', (displayMenu));
hideBtn.addEventListener('click', (hideMenu));

/*Hidden dropdown menu when scroll*/
window.addEventListener("scroll", ()=>{
  if (lastScrollY < window.scrollY){
    dropdownMenu.classList.add("dropdownMenu--hidden");

  }else{
    dropdownMenu.classList.remove("dropdownMenu--hidden");
    
  }
  lastScrollY = window.scrollY;

})





/*Container About me*/
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

descripcionButton.addEventListener('click',(showMoreAboutMe));
backDescripcionButton.addEventListener('click',(backToWhoIAm));

