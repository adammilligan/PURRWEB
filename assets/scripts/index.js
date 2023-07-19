
const state = {
  data: {
    name: '',
    mail: '',
    phone: '',
    company: '',
    website: '',
  },
  submit: false,
  errors: {
    name: '',
    mail: '',
    phone: '',
  }
}

const elements = {
  nameInput: document.querySelector('#name'),
  mailInput: document.querySelector('#mail'),
  phoneInput: document.querySelector('#phone'),
  companyInput: document.querySelector('#company'),
  websiteInput: document.querySelector('#website'),
  submit: document.querySelector('#submit_button'),
  formSubmit: document.querySelector('#form'),
  modalClose: document.querySelector('.modal_close'),

}

function isValid() {
  if (state.data.name.length
    && state.data.mail.length
    && state.data.phone.length
    && !state.errors.name.length
    && !state.errors.mail.length
    && !state.errors.phone.length) {
    state.submit = true;
  }
}


elements.nameInput.addEventListener('change', (e) => {
  const value = e.currentTarget.value;
  const normalValue = value.toLowerCase().trim();
  const regRus = /^([А-ЯЁа-яё]+)$/;
  const regEng = /^([A-Za-z]+)$/;
  if(normalValue.length === 0) {
    state.errors.name = 'This field is required.';
  } else if(!regRus.test(normalValue) && !regEng.test(normalValue)) {
    state.errors.name = 'Only letters of the same alphabet.'
  } else {
    state.errors.name = '';
    state.data.name = normalValue;
  }
  isValid();
  render(state, elements)
})

elements.mailInput.addEventListener('change', (e) => {
  const value = e.currentTarget.value;
  const normalValue = value.toLowerCase().trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(normalValue.length === 0) {
    state.errors.name = 'This field is required.';
  } else if(!regex.test(normalValue)) {
    state.errors.mail = 'Not email.';
  } else {
    state.errors.mail = ''
    state.data.mail = normalValue;
  }
  isValid()
  render(state, elements)
})

elements.phoneInput.addEventListener('click', (e) => {
  e.currentTarget.value = '';
})

elements.phoneInput.addEventListener('change', (e) => {
  const value = e.currentTarget.value;
  const normalValue = value.toLowerCase().trim();
  const regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  if(normalValue.length === 0) {
    state.errors.phone = 'This field is required.';
  } else if(!regex.test(normalValue)) {
    state.errors.phone = 'Not phone number.';
  } else {
    state.errors.phone = '';
    state.data.phone = normalValue;
  }
  isValid()
  render(state, elements)
})

elements.companyInput.addEventListener('change', (e) => {
  const value = e.currentTarget.value;
  state.data.company = value.toLowerCase().trim();
  isValid()
  render(state, elements)
})

elements.websiteInput.addEventListener('change', (e) => {
  const value = e.currentTarget.value;
  state.data.website = value.toLowerCase().trim();
  isValid()
  render(state, elements)
})

elements.formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  elements.formSubmit.classList.add('hidden');
  state.data.name = '';
  state.data.mail = '';
  state.data.phone = '';
  state.data.company = '';
  state.data.website = '';
  state.submit = false;
  elements.nameInput.value = '';
  elements.phoneInput.value = '';
  elements.mailInput.value = '';
  elements.companyInput.value = '';
  elements.websiteInput.value = '';
})

const modalButtons = document.querySelectorAll('.form_button')

modalButtons.forEach((button) => button.addEventListener('click', () => {
  elements.formSubmit.classList.remove('hidden')
}))

elements.modalClose.addEventListener('click', () => {
  elements.formSubmit.classList.add('hidden');
})
