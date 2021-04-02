import './styles/styles.scss'
import questionsPageModule from './modules/questions';
import homePageModule from './modules/home-page-request';


window.addEventListener('DOMContentLoaded', () => {
  // Тут вызываем все модули
  if (location.pathname === '/questions.html') {
    questionsPageModule();
  } else if (location.pathname === '/about.html') {
    // страница about; 
  } else if (location.pathname === '/index.html') {
    homePageModule();
  }
  
})
