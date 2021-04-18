import './styles/styles.scss';
import { homeModule } from './modules/homePage';
import { deleteQuestions, filter, render, setQuestion } from './modules/questions';
import { api } from './modules/questions/support';


window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/questions.html') {
    filter(api, render);
    render(api);
    setQuestion(render);
    deleteQuestions(render);
  }
  else if (window.location.pathname === '/about.html') {
    // страница about; 
  }
  else if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    // страница about; 
    homeModule()
  }
})