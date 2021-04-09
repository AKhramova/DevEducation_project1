import api from '../api'

export default function getReq(fileFilter, themeFilter, questionContainer) {
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
            <button id="delete-message" class="question__button"></button>
            <div class="question__theme">
              <div class="question__theme-key">Theme</div>
              <div class="question__theme-value">${data[i].theme}</div>
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
}
