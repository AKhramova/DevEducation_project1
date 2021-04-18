import { supportModal } from "./support";

export default function deleteQuestions(render, api) {
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
  supportModal.closeBg(deleteMessagePopup)
  supportModal.close(cancelDeleteQuestion, deleteMessagePopup)
  supportModal.close(closeDeleteQuestion, deleteMessagePopup)
  supportModal.exitOnEscape(deleteMessagePopup)
}
