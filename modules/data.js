import { renderHTML, renderHTML2 } from "./render.js"
import { displayLoading, hideLoading } from './loading.js'
import { laadOpties } from "./filter.js"

const searchBar = document.querySelector("input[type='text']")
const secret = "4289fec4e962a33118340c888699438d"

const config = {
  Authorization: `Bearer ${secret}`,
}

export const getData = (url) => {
  displayLoading()
  fetch(url, config)
    .then((response) => {
        return response.json()
    })
    .then((data) => { 
        hideLoading()
        renderHTML(data)
        laadOpties(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getData2 = () => {
  const cors = "https://cors-anywhere.herokuapp.com/"
  const query = searchBar.value
  const secret = "4289fec4e962a33118340c888699438d"
  let url2 = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=digitaal%20burgerschap+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=a57b7bbd1cde2f6fb7ce5b3f2d1d96e0&output=json`

  
  fetch(url2, config)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
      console.log(data)
      renderHTML2(data)
    })
    .catch((err) => {
      console.log(err)
    })
}



