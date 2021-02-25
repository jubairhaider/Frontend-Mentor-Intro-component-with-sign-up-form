const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit-btn');


submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  
   const firstName = document.querySelector('#firstName').value;
   const lastName = document.querySelector('#lastName').value;
   const email = document.querySelector('#email').value;
   const password = document.querySelector('#password').value;
   //const small = document.querySelector('small');

   if(firstName === ''){
    const firstErr = document.querySelector('#fname-err');
    const firstName = document.querySelector('#firstName');
    
    firstName.style.border = '2px solid hsl(0, 100%, 74%)';
    firstErr.style.opacity = 1;
   }
   if(lastName === ''){
    const lastName = document.querySelector('#lastName');
    const lastErr = document.querySelector('#lname-err');
    lastName.style.border = '2px solid hsl(0, 100%, 74%)';
    lastErr.style.opacity = 1;
 }
  if(email === ''){
    const emailErr = document.querySelector('#email-err');
    const email = document.querySelector('#email');
    email.style.border = '2px solid hsl(0, 100%, 74%)';
    emailErr.style.opacity = 1;
  }
    if(password === ''){
      const passErr = document.querySelector('#pass-err');
      const password = document.querySelector('#password');
      password.style.border = '2px solid hsl(0, 100%, 74%)';
      passErr.style.opacity = 1;
}
})
