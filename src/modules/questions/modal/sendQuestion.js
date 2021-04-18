import { api } from '../support'

export default function sendQuestion({ createBtn, textArea, select, answer, fileSystem, closeFunc, modal, render }) {
  createBtn.addEventListener('click', function () {
    var question = {
      id: null,
      text: null,
      answer: null,
      theme: null,
      formats: null
    }

    var fileFilter = localStorage.getItem('file_filter'),
      themeFilter = localStorage.getItem('theme_filter')

    var formats = []
    question.id = new Date().getTime()
    question.text = textArea.value
    question.theme = select.value
    for (var i = 0; i < answer.length; i++) {
      if (answer[i].checked) question.answer = answer[i].value
    }
    for (var i = 0; i < fileSystem.length; i++) {
      if (fileSystem[i].checked) formats.push(fileSystem[i].value)
    }
    question.formats = formats
    this.disabled = true
    api.postAndDeleteRequest('/questions', question, 'POST')
      .then(function () {
        for (var i = 0; i < question.formats.length; i++) {
          if (question.formats[i].toLowerCase() === fileFilter &&
            (question.theme.toLowerCase() === themeFilter || themeFilter === 'all')) {
            render(api)
          }
        }
      }).catch(err => console.log(err))
    closeFunc(modal)
  })
}