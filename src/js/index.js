
let email = document.getElementById('email');
let password = document.getElementById('password');

const button = document.getElementById('button');
button.addEventListener('click', () =>{
    alert(`${email.value}, ${password.value}`)
})

