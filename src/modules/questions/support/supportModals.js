var supportModal = {
  openPopup(element) {
    element.classList.remove('hidden');
  },
  closePopup(element) {
    element.classList.add('hidden');
  },

  close(trigger, closedEl) {
    trigger.addEventListener('click', function (e) {
      this.closePopup(closedEl)
    }.bind(this))
  },
  closeBg(elem) {
    elem.addEventListener('click', function (e) {
      if (e.target === elem) {
        this.closePopup(e.target)
      }
    }.bind(this))
  },
  exitOnEscape(element) {
    window.addEventListener('keyup', function (e) {
      if (e.keyCode === 27) {
        this.closePopup(element);
      }
    }.bind(this))
  }
}

export default supportModal