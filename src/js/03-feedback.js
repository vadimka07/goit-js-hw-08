import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const KEY_FEEDBACK_FORM = "feedback-form-state";
let formValues = {};
function setValuesForm() {
  if(localStorage.getItem(KEY_FEEDBACK_FORM)) {
    const valuesForm = JSON.parse(localStorage.getItem(KEY_FEEDBACK_FORM))
    form.elements.email.value = valuesForm.email;
    form.elements.message.value = valuesForm.message;
  }
}
setValuesForm();
function setValueLS(){
  let email = form.elements.email.value
  let message = form.elements.message.value
  formValues = {
    email,
    message
  }
  const localStorageWrite = JSON.stringify(formValues);
  localStorage.setItem(KEY_FEEDBACK_FORM, localStorageWrite)
}
form.addEventListener('input', throttle(setValueLS, 500))
function handlerSubmit(e) {
  e.preventDefault();
  console.log(formValues);
  e.currentTarget.reset();
  localStorage.removeItem(KEY_FEEDBACK_FORM);
}
form.addEventListener('submit', handlerSubmit)