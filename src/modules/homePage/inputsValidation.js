import homePageSupport from "./homePageSupport";

export default function inputsValidation({ fullName, height, weight, yo, dateOfBirth, hobby }) {
  var isValid = true;
  var birthDatePattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d$/;

  var valid = homePageSupport.valid

  if (!fullName.value.length || fullName.value.length > 24) {
    isValid = valid(fullName, 'Enter your full name')
  } else {
    fullName.classList.remove('error');
  }
  if (!height.value.length || height.value.length > 3 || (Number(height.value) <= 0) || height.value[0] === '0') {
    isValid = valid(height, 'Enter your height')
  } else {
    height.classList.remove('error');
  }
  if (!weight.value.length || weight.value.length > 3 || (Number(weight.value) <= 0) || weight.value[0] === '0') {
    isValid = valid(weight, 'Enter your weight')
  } else {
    weight.classList.remove('error');
  }
  if (!yo.value.length || yo.value.length > 3 || (Number(yo.value) <= 0) || yo.value[0] === '0') {
    isValid = valid(yo, 'Enter your age')
  } else {
    yo.classList.remove('error');
  }
  if (!dateOfBirth.value.length || !birthDatePattern.test(dateOfBirth.value)) {
    isValid = valid(dateOfBirth, 'Enter your date of birth')
  } else {
    dateOfBirth.classList.remove('error');
  }
  if (!hobby.value.length || hobby.value.length > 38) {
    isValid = valid(hobby, 'Enter your hobby')
  } else {
    hobby.classList.remove('error');
  }
  return isValid;
}