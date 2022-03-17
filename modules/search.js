import { getData, getData2 } from './data.js'
import { sectionArea } from './render.js'

const searchBar = document.querySelector("input[type='text']")
const button = document.querySelector('#zoekKnop')

export const search = () =>{
    sectionArea.innerHTML = ""
    let searchTerm = searchBar.value ? searchBar.value : "boeken"
    const cors = "https://cors-anywhere.herokuapp.com/"
    const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
    const key = "6c2bd595a3ca9a65b295591f2ca09652"
    const detail = "Default"
    let url = `${cors}${endpoint}${searchTerm}&authorization=${key}&detaillevel=${detail}&output=json`
    getData(url)
    getData2()
 }

 searchBar.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        search()
    }
})
button.addEventListener("click", () => search())
