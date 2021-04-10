import render from './render/render'

export default function filter() {
  var fileFilter = document.querySelector('#file-system'),
    themeFilter = document.querySelector('#questions-theme'),
    fileName = 'file_filter',
    themeName = 'theme_filter'

  if (!localStorage.getItem(fileName)) {
    localStorage.setItem(fileName, fileFilter.value)
  }
  if (!localStorage.getItem(themeName)) {
    localStorage.setItem(themeName, themeFilter.value)
  }

  fileFilter.value = localStorage.getItem(fileName)
  themeFilter.value = localStorage.getItem(themeName)

  fileFilter.addEventListener('change', function (e) {
    localStorage.setItem(fileName, e.target.value)
    render()
  })

  themeFilter.addEventListener('change', function (e) {
    localStorage.setItem(themeName, e.target.value)
    render()
  })
}


