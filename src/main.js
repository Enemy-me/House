


let ButtonFrance = document.querySelector(`#France`)

const ContentFrance = document.querySelector(`.France`)

let ButtonGermany = document.querySelector(`#Germany`)

const ContentGermany = document.querySelector(`.Germany`)

let ButtonEngland = document.querySelector(`#England`)

const ContentEngland = document.querySelector(`.England`)




ButtonFrance.addEventListener('click', () => {

    ButtonGermany.classList.remove('is-active')
    ButtonEngland.classList.remove('is-active')
    ContentFrance.style.display = ""

    ContentGermany.style.display = `none`;
    ContentEngland.style.display = "none";

    ButtonFrance.classList.add('is-active')


})

ButtonGermany.addEventListener('click', () => {



  ButtonFrance.classList.remove('is-active')
  ButtonEngland.classList.remove('is-active')
  ContentGermany.style.display = ""

  ContentFrance.style.display = `none`;
  ContentEngland.style.display = "none";


  ButtonGermany.classList.add('is-active')

})

ButtonEngland.addEventListener('click', () => {



  ButtonFrance.classList.remove('is-active')
  ButtonGermany.classList.remove('is-active')
  ContentEngland.style.display = ""

  ContentGermany.style.display = `none`;
  ContentFrance.style.display = "none";

  ButtonEngland.classList.add('is-active')
})
