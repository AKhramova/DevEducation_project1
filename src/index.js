import './styles/styles.scss'
import filter from './modules/filter';
import homePageModule from './modules/home-page-request';
import questionsPageModule from './modules/questions';

window.addEventListener('DOMContentLoaded', () => {
  // Тут вызываем все модули
  if (window.location.pathname === '/questions.html') {
    questionsPageModule();
    filter();
  } else if (window.location.pathname === '/about.html') {
    // страница about; 
  } else if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    // страница about; 
    homePageModule();
  }

})
