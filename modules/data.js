import { renderHTML } from "./render.js"
import { displayLoading, hideLoading } from './loading.js'
import { sectionArea } from './render.js'
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
        sectionArea.innerHTML = ""
        renderHTML(data)
    })
    .catch((err) => {
      console.log(err)
    })
}
