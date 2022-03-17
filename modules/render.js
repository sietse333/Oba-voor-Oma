export const sectionArea = document.querySelector('#section')
export const secondapiArea = document.querySelector('#api2container')
import { searchError } from './error.js'

// Renderen van resultaten
export function renderHTML(data) {
    const results = data.results
    sectionArea.innerHTML = ""
    // error functie
    searchError(data)
    results.forEach((item, i) => {
      const html = 
        `         
        <article>
            <img src="${item.coverimages[1]}">
            <p>${item.frabl.key1}</p>
            <a href="${item.detailLink}"><p>Meer infomratie...</p></a>
        </article>
        `
        sectionArea.insertAdjacentHTML("afterbegin", html)
    })
  }

  
  
  // Renderen van gefilterde opties
  export function renderFilter(newData){
    const results = newData
    sectionArea.innerHTML = ""
    results.forEach((item, i) => {
      const html = 
        `         
        <article>
            <img src="${item.coverimages[1]}">
            <p>${item.frabl.key1}</p>
            <a href="${item.detailLink}"><p>Meer infomratie...</p></a>
        </article>
        `
        sectionArea.insertAdjacentHTML("afterbegin", html)
    })
  }


  // Renderen van resultaten van de tweede API
export function renderHTML2(data) {
  const results = data.results
  secondapiArea.innerHTML = ""
  results.forEach((item, i) => {
    const html = 
      `
        <article>
          <p>${item.titles[0]}</p>
          <a href="${item.detailLink}"><p>Meer informatie...</p></a>
        </article>
      `
      secondapiArea.insertAdjacentHTML("afterbegin", html)
  })
}