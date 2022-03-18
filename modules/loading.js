import { sectionArea } from './render.js'

// Skeleton that is being showed when the page is loading
export function displayLoading() {
    sectionArea.classList.add("skeleton")
}
  
export function hideLoading() {
    sectionArea.classList.remove("skeleton")
}
