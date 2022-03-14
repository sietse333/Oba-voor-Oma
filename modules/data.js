
export const getData = (url) =>{
    const data = fetch(url)
      .then(response => response.json())
      .then(data => {
        renderHTML(data, () => {
            console.log('done!')
        })
    })
      .catch(err => emptyText.textContent = "Failed to load paintings please refresh the page" )
  }

  console.log(getData)