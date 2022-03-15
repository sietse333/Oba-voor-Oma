// export function tagsForm(quotes){
//     console.log("GET TAGS")

//     tagForm.addEventListener('change', event => {
//         filteredTags(quotes, event)
//     })

//     sectionTagsForm.innerHTML=""
//     let allTags = quotes.data.map(data =>{
//         return data.tags.split(',')
//     });

//     allTags = [...new Set(allTags.flat(1))]

//     allTags = allTags.map(el => {
//         return el.trim()
//     });

//     allTags.forEach(item => {
//         sectionTagsForm.insertAdjacentHTML('afterbegin', 
//         `<div>
//             <input type="checkbox" id="${item}">
//         <label for="${item}"> ${item}</label>
//         </div>`)
//     })
// }