const btnMobile = document.getElementById("btn-mobile");
const logoMenu = document.querySelector(".logo img");

function toggleModal() {
  const header = document.querySelector(".header");
  const imgBtn = this.querySelector("button img");
  header.classList.toggle("ativo");
  if (header.classList.contains("ativo")) {
    logoMenu.setAttribute("src", "./img/logoMobile.svg");
    imgBtn.setAttribute("src", "./img/icon-close.svg");
  } else {
    logoMenu.setAttribute("src", "./img/logo-bookmark.svg");
    imgBtn.setAttribute("src", "./img/icon-hamburger.svg");
  }
}

btnMobile.addEventListener("click", toggleModal);

const btnEmail = document.querySelector(".btn-email");
const areaInput = document.querySelector(".input-email");

function checkEmail(event) {
  event.preventDefault();
  const inputEmail = document.getElementById("inputEmail");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const inputValue = inputEmail.value.trim();
  const valideInput = emailRegex.test(inputEmail.value);
  if (inputValue && valideInput) {
    removeErro();
  } else {
    showErro("Whoops, make sure it’s an email");
  }
}

function showErro(text) {
  if (!document.querySelector(".area-input span")) {
    const areaErro = document.querySelector(".area-input");
    areaInput.classList.add("error");
    let spanErro = document.createElement("span");
    let imgErro = document.createElement("img");
    imgErro.setAttribute("src", "./img/icon-error.svg");
    spanErro.innerText = text;
    areaErro.appendChild(spanErro);
    areaErro.appendChild(imgErro);
  }
}

function removeErro() {
  const error = document.querySelector(".error");
  let erroImg = error.querySelector("img");
  let erroSpan = error.querySelector("span");
  if (error) {
    areaInput.classList.remove("error");
    erroImg.remove();
    erroSpan.remove();
  }
}

btnEmail.addEventListener("click", checkEmail);

const listaFaq = document.querySelectorAll(".faq dt");

function toggleList() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo");
}

listaFaq.forEach((item) => {
  item.addEventListener("click", toggleList);
});

const featuresList = document.querySelectorAll(".features-list div");

const objetoList = [
  {
    img: "./img/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    img: "./img/illustration-features-tab-2.svg",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    img: "./img/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];


function trocaCont(index){
    const element = document.querySelector('.tab-faetures')
    element.classList.remove('fade-in');

    setTimeout(function () {
        element.classList.add('fade-in');
    }, 10);

    const img = element.querySelector('img')
    const h2 = element.querySelector('h2')
    const p = element.querySelector('p')

   img.setAttribute('src',objetoList[index].img)
   h2.textContent = objetoList[index].title
   p.textContent = objetoList[index].text
}

function trocaLink(index) {
  featuresList.forEach((item) => {
    item.classList.remove("active");
  });
  featuresList[index].classList.add("active");
  trocaCont(index)
}

featuresList.forEach((item, index) => {
  item.addEventListener("click", () => {
    trocaLink(index);
  });
});








