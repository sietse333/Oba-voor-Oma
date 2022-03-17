export const filterKnop = document.querySelector('header > button')
export const filterContainer = document.querySelector('main > section > article:first-of-type')

export const showHide = () =>{
    filterContainer.classList.toggle('slideback')
}

filterKnop.addEventListener('click', showHide)