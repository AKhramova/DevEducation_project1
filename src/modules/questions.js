'use strict';

function deleteMessagePopUp() {
    var deleteMessageBtn = document.getElementById('delete-message');
    var popup = document.getElementById('popup');
    var cancelBtn = document.getElementById('cancel-btn');
    var confirmBtn = document.getElementById('confirm-btn');
    var closeBtn = document.getElementById('closePopUp');
    
    deleteMessageBtn.addEventListener('click', deleteQuestions);
    cancelBtn.addEventListener('click', closePopUp);
    closeBtn.addEventListener('click', closePopUp);
    popup.addEventListener('click', closePopUp);
    
    function deleteQuestions() {
        popup.classList.remove('hidden');
    }
    function closePopUp() {
        popup.classList.add('hidden');  
    }
}
export default deleteMessagePopUp;