import sendQuestion from './sendQuestion'
import validation from './validation'

export default function setQuestion() {
  var writeQuestion = document.querySelector('#writeQuestion'),
    selectTheme = document.querySelector('#selectTheme'),
    answer = document.querySelectorAll('.answer-radio'),
    fileSystem = document.querySelectorAll('.checkBox__choose-input'),
    createQuestion = document.getElementById('create-modal-new-question'),
    addNewQuestion = document.getElementById('new-question'),
    modalNewQuestion = document.getElementById('new-question-modal'),
    cancelNewQuestion = document.getElementById('cancel-modal-new-question'),
    closeNewQuestion = document.getElementById('close-modal-new-question')

  sendQuestion({
    createBtn: createQuestion,
    textArea: writeQuestion,
    select: selectTheme,
    closeFunc: closePopup,
    modal: modalNewQuestion,
    answer,
    fileSystem
  })
  validation(createQuestion, writeQuestion, fileSystem)

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
    for (var i = 0; i < fileSystem.length; i++) {
      if (fileSystem.value !== localStorage.getItem('file_filter')) {
        fileSystem[i].checked = false
      }
    }
  }
  function exitOnEscape(event, element) {
    if (event.keyCode === 27) {
      closePopup(element);
    }
  }
}