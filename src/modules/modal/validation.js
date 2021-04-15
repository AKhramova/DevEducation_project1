export default function validation(createBtn, textArea, fileSystem) {
  var isChangedFs = true

  textArea.addEventListener('input', function () {
    if (this.value.trim() !== '' && isChangedFs && this.value.length <= 255) {
      createBtn.disabled = false
    }
    else if (this.value.trim() === '' || !isChangedFs || this.value.length >= 255) {
      createBtn.disabled = true
    }
  })

  for (let i = 0; i < fileSystem.length; i++) {
    fileSystem[i].addEventListener('input', function () {
      for (let k = 0; k < fileSystem.length; k++) {
        if (fileSystem[k].checked) {
          isChangedFs = true
          break
        }
        isChangedFs = false
      }
      if (isChangedFs && textArea.value !== '' && textArea.value.length <= 255) {
        createBtn.disabled = false
      }
      else if (!isChangedFs || textArea.value !== '' || textArea.value.length >= 255) {
        createBtn.disabled = true
      }
    })
  }
}