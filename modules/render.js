export const sectionArea = document.querySelector('#section')
import { searchError } from './error.js'

// Renderen van resultaten
export function renderHTML(data) {
    const results = data.results
    sectionArea.innerHTML = ""
    console.log(results)
    // error functie
    searchError(data)
    results.forEach((item, i) => {
      console.log(item)
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