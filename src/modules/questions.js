'use strict';

function questionsPageModule() {
    // delete question popup
    var deleteMessageBtn = document.getElementById('delete-message');
    var deleteMessagePopup = document.getElementById('delete-message-popup');
    var cancelDeleteQuestion = document.getElementById('cancel-delete-question');
    var confirmDeleteQuestion = document.getElementById('confirm-delete-question');
    var closeDeleteQuestion = document.getElementById('closePopUp');
    // new question modal window
    var addNewQuestion = document.getElementById('new-question');
    var modalNewQuestion = document.getElementById('new-question-modal');
    var cancelNewQuestion = document.getElementById('cancel-modal-new-question');
    var createNewQuestion = document.getElementById('create-modal-new-question');
    var closeNewQuestion = document.getElementById('close-modal-new-question');

    // delete message popup
    deleteMessageBtn.addEventListener('click', function () {
        openPopup(deleteMessagePopup);
    });
    cancelDeleteQuestion.addEventListener('click', function () {
        closePopup(deleteMessagePopup);
    });
    closeDeleteQuestion.addEventListener('click', function () {
        closePopup(deleteMessagePopup);
    });
    deleteMessagePopup.addEventListener('click', function (event) {
        handlePopupClick(event, deleteMessagePopup)
    });
    window.addEventListener('keyup', function (event) {
        exitOnEscape(event, deleteMessagePopup);
    });
    addNewQuestion.addEventListener('click', function () {
        openPopup(addNewQuestion);
    });


    // new message modal
    // addNewQuestion.addEventListener('click', function () {
    //     openPopup(modalNewQuestion);
    // });
    // cancelNewQuestion.addEventListener('click', function () {
    //     closePopup(modalNewQuestion);
    // });
    // closeNewQuestion.addEventListener('click', function () {
    //     closePopup(modalNewQuestion);
    // });
    // modalNewQuestion.addEventListener('click', function (event) {
    //     handlePopupClick(event, modalNewQuestion)
    // });
    // window.addEventListener('keyup', function (event) {
    //     exitOnEscape(event, modalNewQuestion);
    // });
    // addNewQuestion.addEventListener('click', function () {
    //     openPopup(addNewQuestion);
    // });
    function handlePopupClick(event, element) {
        if (event.target === element) {
            closePopup(element);
        }
    }
    function openPopup(element) {
        element.classList.remove('hidden');
    }
    function closePopup(element) {
        element.classList.add('hidden');
    }
    function exitOnEscape(event, element) {
        if (event.keyCode === 27) {
            closePopup(element);
        }
    }
}

export default questionsPageModule;
