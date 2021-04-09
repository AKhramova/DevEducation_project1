import getQuestion from './getQuestion'

export default function render() {
  var fileFilter = document.querySelector('#file-system'),
    themeFilter = document.querySelector('#questions-theme'),
    questionContainer = document.querySelector('.question-list__container')
  getQuestion(fileFilter, themeFilter, questionContainer);

  fileFilter.addEventListener('change', function () {
    questionContainer.innerHTML = ` `;
    getQuestion(fileFilter, themeFilter, questionContainer);
  })

  themeFilter.addEventListener('change', function () {
    questionContainer.innerHTML = ` `;
    getQuestion(fileFilter, themeFilter, questionContainer);
  })
}
