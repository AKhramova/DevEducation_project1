var supportModal = {
  openPopup(element) {
    element.classList.remove('hidden');
  },

  closePopup(element) {
    element.classList.add('hidden');
  },

  exitOnEscape(event, element) {
    if (event.keyCode === 27) {
      this.closePopup(element);
    }
  }
}

export default supportModal