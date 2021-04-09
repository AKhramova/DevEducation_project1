import api from "./getRequest"

export default function filter() {
  var fileFilter = document.querySelector('#file-system'),
    themeFilter = document.querySelector('#questions-theme'),
    fileName = 'file_filter',
    themeName = 'theme_filter';

  if (!localStorage.getItem(fileName)) {
    localStorage.setItem(fileName, fileFilter.value)
  }
  if (!localStorage.getItem(themeName)) {
    localStorage.setItem(themeName, themeFilter.value)
  }
  fileFilter.value = localStorage.getItem(fileName);
  themeFilter.value = localStorage.getItem(themeName);

  fileFilter.addEventListener('change', function (e) {
    localStorage.setItem(fileName, e.target.value)
    render();
  })

  themeFilter.addEventListener('change', function (e) {

    localStorage.setItem(themeName, e.target.value)
    render();
  })
}

export function render(){
  var fileFilter = document.querySelector('#file-system'),
    themeFilter = document.querySelector('#questions-theme');
    getReq();

   fileFilter.addEventListener('change', function(){
    document.querySelector('.question-list__container').innerHTML =  ` `;
     getReq();
   })

   themeFilter.addEventListener('change', function(){
    document.querySelector('.question-list__container').innerHTML =  ` `;
     getReq();
   })

   function getReq(){
    api.getRequest(`/questions?file=${fileFilter.value}&theme=${themeFilter.value}`)
    .then(data => {
      if(data.length >= 1){
        var render = "";
        for (var i = 0; i < data.length; i++) {
          render += `
          <div class="question">
            <div class="question__text" id="question">${data[i].question}
             <div class="question__text-box" ></div>
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
            document.querySelector('.question-list__container').innerHTML = render;
      } else if(data.length === 0){
        document.querySelector('.question-list__container').innerHTML =   `
        <p class="question-list__message">
        There are no questions </p>`
      }
    })
  }
}
