import { api } from '../support'
import { supportModal } from '../support';
import date from './date';
export default function render() {
  var fileFilter = document.querySelector('#file-system'),
    themeFilter = document.querySelector('#questions-theme'),
    questionContainer = document.querySelector('.question-list__container')

  api.getRequest(`/questions?file=${fileFilter.value}&theme=${themeFilter.value}`)
    .then(data => {
      if (data.length >= 1) {
        var render = "";
        for (var i = 0; i < data.length; i++) {
          render +=
            `
          <div class="question">
            <div class="question__text" id="question" title="${data[i].text}">
              <div class="question__text-box">${data[i].text}</div>
            </div>
            <div class="question__answer">
              <div class="question__answer-key">Answer</div>
              <div class="question__answer-value">${data[i].answer}</div>
            </div>
            <button class="question__button" data-id="${data[i].id}"></button>
            <div class="d-flex">
              <div class="question__theme">
                <div class="question__theme-key">Theme</div>
                <div class="question__theme-value">${data[i].theme}</div>
              </div>
              <div class="question__theme">${date(+data[i].id)}</div>
            </div>
          </div>
          `
        }

        return questionContainer.innerHTML = render;
      }
      return questionContainer.innerHTML =
        `
        <p class="question-list__message">
          There are no questions 
        </p>
      `
    })
    .then(function () {
      var deleteMessagePopup = document.getElementById('delete-message-popup'),
        deleteMessageBtn = document.querySelectorAll('.question__button'),
        confirmDeleteQuestion = document.getElementById('confirm-delete-question')

      for (var i = 0; i < deleteMessageBtn.length; i++) {
        deleteMessageBtn[i].addEventListener('click', function () {
          confirmDeleteQuestion.setAttribute('data-id', this.dataset.id)
          supportModal.openPopup(deleteMessagePopup)
        })
      }
    }).catch(err => console.log(err))
}
