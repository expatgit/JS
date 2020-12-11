'use strict';

let loginForm = document.forms['login-form'];
let pwdIcon = document.getElementById('password-icon');

pwdIcon.addEventListener('click', changeIcon);

function changeIcon() {
    if (this.innerText === 'visibility_off'){
        loginForm.elements.password.setAttribute('type', 'text');
        this.innerText = 'visibility';

    } else {
        loginForm.elements.password.setAttribute('type', 'password');
        this.innerText = 'visibility_off';
    }
};

