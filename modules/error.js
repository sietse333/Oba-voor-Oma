export const searchError = (data) => {
    const searchText = document.querySelector('h4')

    if(data.results.length === 0){
        searchText.textContent = "Your search is not in the database. Please try something different";
    }else{
        searchText.textContent = "";
    }   
}