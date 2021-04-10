import './styles/styles.scss';
import filter from './modules/filter';
import homePageModule from './modules/home-page-request';
import render from './modules/render/render';
import setQuestion from './modules/modal';
import deleteQuestions from './modules/deleteQuestion';

window.addEventListener('DOMContentLoaded', () => {
  // window.onload = function () {
  //   document.body.classList.add('loaded__hiding');
  //   window.setTimeout(function () {
  //     document.body.classList.add('loaded');
  //     document.body.classList.remove('loaded__hiding');
  //   }, 500);
  // }
  if (window.location.pathname === '/questions.html') {
    filter();
    render();
    setQuestion();
    deleteQuestions()
  }
  else if (window.location.pathname === '/about.html') {
    // страница about; 
  }
  else if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    // страница about; 
    homePageModule();
  }
})
