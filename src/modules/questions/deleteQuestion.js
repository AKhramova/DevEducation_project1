import { api } from "./support";
import render from "./render/render";
import { supportModal } from "./support";

export default function deleteQuestions(render) {
  var deleteMessagePopup = document.getElementById('delete-message-popup'),
    cancelDeleteQuestion = document.getElementById('cancel-delete-question'),
    confirmDeleteQuestion = document.getElementById('confirm-delete-question'),
    closeDeleteQuestion = document.getElementById('closePopUp');

  confirmDeleteQuestion.addEventListener('click', function () {
    var body = {
      id: this.dataset.id,
      format: localStorage.getItem('file_filter')
    }

    api.postAndDeleteRequest('/questions', body, "DELETE")
      .then(() => {
        render(api)
      }).catch(err => console.log(err))
    supportModal.closePopup(deleteMessagePopup)
  })

  cancelDeleteQuestion.addEventListener('click', function () {
    supportModal.closePopup(deleteMessagePopup)
  })

  closeDeleteQuestion.addEventListener('click', function () {
    supportModal.closePopup(deleteMessagePopup)
  })

  deleteMessagePopup.addEventListener('click', function (event) {
    if (event.target === this) {
      supportModal.closePopup(deleteMessagePopup)
    }
  })

  window.addEventListener('keyup', function (event) {
    supportModal.exitOnEscape(event, deleteMessagePopup)
  })
}