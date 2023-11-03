let photo = document.getElementsByClassName("personalphoto");
let myName = document.getElementById('myName');
let generalBackground = document.querySelector('*');
let bannerContainer= document.getElementsByClassName('banner-container');
let nightModeButton = document.getElementsById('myPortafolio');


function nightMode() {
    nightModeButton.innerHTML='25px';
  
}

function nameChanger(event) {
    myName.innerHTML = 'Daniela';
  }


photo.onclick = function () {
  photochange();
};

myName.onclick = function () {
    nameChanger();
  };

nightModeButton.onclick = function () {
    nightMode();
  };
  