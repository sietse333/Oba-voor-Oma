import { renderHTML, renderFilter } from './render.js'

export const form = document.querySelector('main > section > article > div > form')

// Checkboxes op tijd filteren en renderen
export function laadOpties(data){
    let opties = data.results

    const jaartallen = []

    // map filter
    const alleJaartallen = opties.map(item =>{
        return item.year
    })

    console.log(alleJaartallen)
    form.innerHTML = ""
    alleJaartallen.map(item => {
        if(jaartallen.indexOf(item) == -1) {
          jaartallen.push(item);

        }
    });

    jaartallen.sort()

    jaartallen.map((item) => {
        form.insertAdjacentHTML('afterbegin',
            `
            <label for="${item}">${item}<input type="checkbox" id="${item}"></label>
            `)
      })
      form.addEventListener('change', event => {
        filter(data, event)
    })
}

// De gefilterde tijden tonen
export function filter(data) {
    let checkedJaartallen = [...form.querySelectorAll('input:checked')].map(el => el.id);
    console.log(checkedJaartallen)

    let newData = data.results.filter(element => {
        if (checkedJaartallen.includes(element.year)) {
            return true;
        } else {
            return false;
        }
    })

    if (newData.length > 0) {
        renderFilter(newData)
    } else {
        renderHTML(data)
    }
}