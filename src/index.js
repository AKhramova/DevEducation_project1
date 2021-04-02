import './styles/styles.scss'
import questionsPageModule from './modules/questions'
import filter from './modules/filter';


window.addEventListener('DOMContentLoaded', () => {
  // Тут вызываем все модули
  if (window.location.pathname === '/questions.html') {
    // questionsPageModule();
  } else if (window.location.pathname === '/about.html') {
    // страница about; 
  } else if (window.location.pathname === '/index.html') {
    // страница about; 
  }
  filter('#file-system', 'file_filter')
})