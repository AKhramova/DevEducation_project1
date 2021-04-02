import api from "./api"

export default function filter(select, filterName) {
  var filterItem = document.querySelector(select)
  localStorage.setItem(filterName, filterItem.value)
  filterItem.value = filterValue
  var filterValue = localStorage.getItem(filterName)
  if (!filterValue) {
    localStorage.setItem(filterName, filterItem.value)
  }




  filterItem.addEventListener('change', function (e) {
    localStorage.setItem(filterName, e.target.value)

    // filterValue = localStorage.getItem(filterName)

    api.getRequest(`/questions?file=${e.target.value}`).then(data => console.log(data))
  })



}