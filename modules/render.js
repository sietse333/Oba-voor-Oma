export const sectionArea = document.querySelector('#section')


export function renderHTML(data) {
    const results = data.results
    sectionArea.innerHTML = ""
    console.log(results)
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
  