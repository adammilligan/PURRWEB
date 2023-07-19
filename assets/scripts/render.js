const render = (state, elements) => {
  if(state.errors.name) {
    elements.nameInput.classList.add('modal_form_input_error');
    elements.nameInput.nextElementSibling.innerHTML = state.errors.name;
    elements.nameInput.nextElementSibling.classList.remove('hidden')
  }
  if(!state.errors.name) {
    elements.nameInput.classList.remove('modal_form_input_error');
    elements.nameInput.nextElementSibling.innerHTML = state.errors.name;
    elements.nameInput.nextElementSibling.classList.add('hidden')
  }
  if(state.errors.mail) {
    elements.mailInput.classList.add('modal_form_input_error')
    elements.mailInput.nextElementSibling.innerHTML = state.errors.mail;
    elements.mailInput.nextElementSibling.classList.remove('hidden')
  }
  if(!state.errors.mail) {
    elements.mailInput.classList.remove('modal_form_input_error');
    elements.mailInput.nextElementSibling.innerHTML = state.errors.mail;
    elements.mailInput.nextElementSibling.classList.add('hidden')
  }
  if(state.errors.phone) {
    elements.phoneInput.classList.add('modal_form_input_error')
    elements.phoneInput.nextElementSibling.innerHTML = state.errors.phone;
    elements.phoneInput.nextElementSibling.classList.remove('hidden')
  }
  if(!state.errors.phone) {
    elements.phoneInput.classList.remove('modal_form_input_error');
    elements.phoneInput.nextElementSibling.innerHTML = state.errors.phone;
    elements.phoneInput.nextElementSibling.classList.add('hidden')
  }
  if(state.submit) {
    elements.submit.removeAttribute('disabled');
    elements.submit.classList.remove('disable')
  }
}
