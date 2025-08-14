const form = document.querySelector('form');
const emailInput = document.querySelector('#email-input') as HTMLInputElement;
const section = document.querySelector('section');
const modal = document.querySelector('dialog');
const dismissBtn = document.querySelector('#dismiss-btn');
const userEmail = document.querySelector('#user-email') as HTMLSpanElement;

let email: string;

form?.addEventListener('submit', (e: SubmitEvent)=> {
  e.preventDefault();
  if(emailInput.value.trim() === ""){
    emailInput.setCustomValidity('Oye esto está vacío');
  }else{
    userEmail.innerHTML = emailInput.value
    section?.classList.add('hidden');
    section?.classList.remove('lg:flex');
    modal?.showModal()
  }
})

emailInput.addEventListener('input', ()=>{
  emailInput.setCustomValidity('');
})

dismissBtn?.addEventListener('click', ()=>{
  modal?.close();
  emailInput.value = "";
  section?.classList.remove('hidden');
  section?.classList.add('lg:flex');
})