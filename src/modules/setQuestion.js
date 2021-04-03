import api from './api'
// !!!!!!!!!Сделать валидацию!!!!!!!!!!!
export default function setQuestion() {
  var writeQuestion = document.querySelector('#writeQuestion'),
    selectTheme = document.querySelector('#selectTheme'),
    answer = document.querySelectorAll('.answer-radio'),
    fileSystem = document.querySelectorAll('.checkBox__choose-input'),
    createQuestion = document.querySelector('#create-modal-new-question'),
    addNewQuestion = document.getElementById('new-question'),
    modalNewQuestion = document.getElementById('new-question-modal'),
    cancelNewQuestion = document.getElementById('cancel-modal-new-question'),
    closeNewQuestion = document.getElementById('close-modal-new-question')

  createQuestion.addEventListener('click', function () {
    var question = {
      id: null,
      text: null,
      answer: null,
      theme: null,
      formats: null
    }
    var formats = []
    question.id = new Date().getTime()
    question.text = writeQuestion.value
    question.theme = selectTheme.value
    for (var i = 0; i < answer.length; i++) {
      if (answer[i].checked) question.answer = answer[i].value
    }
    for (var i = 0; i < fileSystem.length; i++) {
      if (fileSystem[i].checked) formats.push(fileSystem[i].value)
    }
    question.formats = formats

    api.postAndDeleteRequest('/questions', question)
    closePopup(modalNewQuestion)
  })

  addNewQuestion.addEventListener('click', function () {
    openPopup(modalNewQuestion);
  })
  cancelNewQuestion.addEventListener('click', function () {
    closePopup(modalNewQuestion)
  })
  closeNewQuestion.addEventListener('click', function () {
    closePopup(modalNewQuestion)
  })
  modalNewQuestion.addEventListener('click', function (event) {
    handlePopupClick(event, modalNewQuestion)
  })
  window.addEventListener('keyup', function (event) {
    exitOnEscape(event, modalNewQuestion)
  })
  addNewQuestion.addEventListener('click', function () {
    openPopup(addNewQuestion)
  })
  function handlePopupClick(event, element) {
    if (event.target === element) {
      closePopup(element);
    }
  }
  function openPopup(element) {
    element.classList.remove('hidden');
    for (let i = 0; i < fileSystem.length; i++) {
      if (localStorage.getItem('file_filter') === fileSystem[i].value.toLowerCase()) {
        fileSystem[i].checked = true
      }
    }
  }
  function closePopup(element) {
    element.classList.add('hidden');
    writeQuestion.value = ''
  }
  function exitOnEscape(event, element) {
    if (event.keyCode === 27) {
      closePopup(element);
    }
  }
}