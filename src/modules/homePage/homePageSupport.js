var homePageSupport = {
  render({ pic, fullName, role, height, weight, yo, dateOfBirth, hobby }, item) {
    pic.src = item.photo;
    fullName.value = item.fullName;
    role.textContent = item.post;
    height.value = item.height;
    weight.value = item.weight;
    yo.value = item.yo;
    dateOfBirth.value = item.dateOfBirth;
    hobby.value = item.hobby;
  },
  cursorTextHandler(inputs) {
    for (var gen of inputs) {
      gen.classList.remove('cursor-default');
      gen.classList.add('cursor-text');
    }
  },
  cursorDefaultHandler(inputs) {
    for (var gen of inputs) {
      gen.classList.remove('cursor-text');
      gen.classList.add('cursor-default');
    }
  },
  addUnderline({ fullName, height, weight, yo, dateOfBirth, hobby }) {
    fullName.classList.toggle('content__group-style');
    height.classList.toggle('content__group-style');
    weight.classList.toggle('content__group-style');
    yo.classList.toggle('content__group-style');
    dateOfBirth.classList.toggle('content__group-style');
    hobby.classList.toggle('content__group-style');
  },
  editInfo({ fullName, height, weight, yo, dateOfBirth, hobby }) {
    fullName.removeAttribute('readonly');
    height.removeAttribute('readonly');
    weight.removeAttribute('readonly');
    yo.removeAttribute('readonly');
    dateOfBirth.removeAttribute('readonly');
    hobby.removeAttribute('readonly');
  },
  saveInfo({ fullName, height, weight, yo, dateOfBirth, hobby }) {
    fullName.setAttribute('readonly', `readonly`);
    height.setAttribute('readonly', `readonly`);
    weight.setAttribute('readonly', `readonly`);
    yo.setAttribute('readonly', `readonly`);
    dateOfBirth.setAttribute('readonly', `readonly`);
    hobby.setAttribute('readonly', `readonly`);
  },
  valid(elem, message) {
    elem.placeholder = message;
    elem.classList.add('error');
    return false;
  }
}

export default homePageSupport