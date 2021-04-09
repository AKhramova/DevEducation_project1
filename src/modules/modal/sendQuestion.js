import api from '../api'

export default function sendQuestion({ createBtn, textArea, select, answer, fileSystem, closeFunc, modal }) {
  createBtn.addEventListener('click', function () {
    var question = {
      id: null,
      text: null,
      answer: null,
      theme: null,
      formats: null
    }
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

    api.postAndDeleteRequest('/questions', question, 'POST')
    closeFunc(modal)
  })
}