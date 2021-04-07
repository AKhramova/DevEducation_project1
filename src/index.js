import './styles/styles.scss'
import filter from './modules/filter';
import homePageModule from './modules/home-page-request';
import questionsPageModule from './modules/questions';
import setQuestion from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  // Тут вызываем все модули
  if (window.location.pathname === '/questions.html') {
    questionsPageModule();
    filter();
    setQuestion();

  } else if (window.location.pathname === '/about.html') {

  } else if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    homePageModule();
  }
})
