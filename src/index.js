import './styles/styles.scss'
import filter from './modules/filter';
// import homePageModule from './modules/home-page-request';


window.addEventListener('DOMContentLoaded', () => {
  // Тут вызываем все модули
  if (window.location.pathname === '/questions.html') {
    questionsPageModule();
  } else if (window.location.pathname === '/about.html') {
    // страница about; 
  } else if (window.location.pathname === '/index.html') {
    // страница about; 
  }
  filter('#file-system', 'file_filter')
  // homePageModule();

})
