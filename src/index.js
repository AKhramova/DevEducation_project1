import './styles/styles.scss';
import filter from './modules/filter';
import render from './modules/render/render';
import setQuestion from './modules/modal';
import deleteQuestions from './modules/deleteQuestion';
import { homeModule } from './modules/homePage';

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/questions.html') {
    filter();
    render();
    setQuestion();
    deleteQuestions();
  }
  else if (window.location.pathname === '/about.html') {
    // страница about; 
  }
  else if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    // страница about; 
    homeModule()
  }
})