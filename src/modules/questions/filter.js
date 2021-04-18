export default function filter(api, render) {
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

  changeHandle(fileFilter, fileName, render, api)
  changeHandle(themeFilter, themeName, render, api)
}
export function changeHandle(elem, filter, fn, api) {
  elem.addEventListener('change', function (e) {
    localStorage.setItem(filter, e.target.value)
    fn(api)
  })
}