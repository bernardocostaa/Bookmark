const btnMobile = document.getElementById('btn-mobile')
const logoMenu = document.querySelector('.logo img')


function toggleModal(){
    const header = document.querySelector('.header')
    const imgBtn = this.querySelector('button img')
    header.classList.toggle('ativo')
   if(header.classList.contains('ativo')){
    logoMenu.setAttribute('src', '../img/logoMobile.svg');
    imgBtn.setAttribute('src','../img/icon-close.svg')
   }else{
    logoMenu.setAttribute('src', '../img/logo-bookmark.svg');
    imgBtn.setAttribute('src','../img/icon-hamburger.svg')
   }
}

btnMobile.addEventListener('click',toggleModal)