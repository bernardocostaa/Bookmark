const btnMobile = document.getElementById('btn-mobile')
const logoMenu = document.querySelector('.logo img')


function toggleModal(){
    const header = document.querySelector('.header')
    const imgBtn = this.querySelector('button img')
    header.classList.toggle('ativo')
   if(header.classList.contains('ativo')){
    logoMenu.setAttribute('src', './img/logoMobile.svg');
    imgBtn.setAttribute('src','./img/icon-close.svg')
   }else{
    logoMenu.setAttribute('src', './img/logo-bookmark.svg');
    imgBtn.setAttribute('src','./img/icon-hamburger.svg')

   }
}

btnMobile.addEventListener('click',toggleModal)


const btnEmail = document.querySelector('.btn-email')
const areaInput = document.querySelector('.input-email')

function checkEmail(event){
    event.preventDefault()
    const inputEmail = document.getElementById('inputEmail')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputValue = inputEmail.value.trim()
    const valideInput = emailRegex.test(inputEmail.value)
    if(inputValue && valideInput){
        removeErro()
    }else{
        showErro('Whoops, make sure it’s an email')
    }
}

function showErro(text){
    if(!document.querySelector('.area-input span')){
        const areaErro = document.querySelector('.area-input')
        areaInput.classList.add('error')
        let spanErro = document.createElement('span')
        let imgErro = document.createElement('img')
        imgErro.setAttribute('src','./img/icon-error.svg')
        spanErro.innerText = text
        areaErro.appendChild(spanErro)
        areaErro.appendChild(imgErro)
    }
}

function removeErro(){
    const error = document.querySelector('.error')
    let erroImg = error.querySelector('img')
    let erroSpan = error.querySelector('span')
    if(error){
        areaInput.classList.remove('error')
        erroImg.remove()
        erroSpan.remove()
    }
}

btnEmail.addEventListener('click',checkEmail)


