import homePageSupport from "./homePageSupport";

export const validateName = function(value) {
  if (!value.length || value.length > 24) {
    return false;
  }
  return true;
}

export const validateHobby = function(value) {
  if (!value.length || value.length > 38) {
    return false;
  }
  return true;
}

export const validateBirthDate = function(value) {
  var birthDatePattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d$/;
  if (!value.length || !birthDatePattern.test(value)) {
    return false;
  }
  return true;
}

export const validatePersonNumbers = function(value) {
  if (!value.length || value.length > 3 || (Number(value) <= 0) || value[0] === '0') {
    return false;
  }
  return true;
}

export default function inputsValidation({ fullName, height, weight, yo, dateOfBirth, hobby }) {
  var isValid = true;
  var setErrorState = homePageSupport.setErrorState;
  var removeErrorState = homePageSupport.removeErrorState;

  if (!validateName(fullName.value)) {
    isValid = false;
    setErrorState(fullName, 'Enter your full name');
  } else {
    removeErrorState(fullName);
  }
  if (!validatePersonNumbers(height.value)) {
    isValid = false;
    setErrorState(height, 'Enter your height');
  } else {
    removeErrorState(height);
  }
  if (!validatePersonNumbers(weight.value)) {
    isValid = false;
    setErrorState(weight, 'Enter your weight');
  } else {
    removeErrorState(weight);
  }
  if (!validatePersonNumbers(yo.value)) {
    isValid = false;
    setErrorState(yo, 'Enter your age');
  } else {
    removeErrorState(yo);
  }
  if (!validateBirthDate(dateOfBirth.value)) {
    isValid = false;
    setErrorState(dateOfBirth, 'Enter your date of birth');
  } else {
    removeErrorState(dateOfBirth);
  }
  if (!validateHobby(hobby.value)) {
    isValid = false;
    setErrorState(hobby, 'Enter your hobby');
  } else {
    removeErrorState(hobby);
  }
  return isValid;
}