import api from "./api"

export default function filter() {
  var fileFilter = document.querySelector('#file-system'),
    themeFilter = document.querySelector('#questions-theme'),
    fileName = 'file_filter',
    themeName = 'theme_filter'

  //если ls пустой сетаем значение  
  if (!localStorage.getItem(fileName)) {
    localStorage.setItem(fileName, fileFilter.value)
  }
  if (!localStorage.getItem(themeName)) {
    localStorage.setItem(themeName, themeFilter.value)
  }

  //выставляем значения dropdown`ов из ls
  fileFilter.value = localStorage.getItem(fileName)
  themeFilter.value = localStorage.getItem(themeName)

  fileFilter.addEventListener('change', function (e) {
    localStorage.setItem(fileName, e.target.value)
    // TO FIX вместо запроса надо сделать рендер функцию
    api.getRequest(`/questions?file=${e.target.value}&theme=${themeFilter.value}`)
      .then(data => console.log(data))
  })

  themeFilter.addEventListener('change', function (e) {
    localStorage.setItem(themeName, e.target.value)
    //вместо запроса надо сделать рендер функцию
    api.getRequest(`/questions?file=${fileFilter.value}&theme=${e.target.value}`)
      .then(data => console.log(data))
  })
}