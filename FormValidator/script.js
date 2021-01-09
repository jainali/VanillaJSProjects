 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const password2 = document.getElementById('password2');

// Show input error message
 function showError(input, message) {
     const formControl = input.parentElement;
     formControl.className = 'form-control error';
     const small = formControl.querySelector('small');
     small.innerText = message;
 }

 // show success outline
 function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
 }

 function checkEmail(input) {
    const re = /\S+@\S+\.\S+/;

    if (re.test(input.value)) {
        showSuccess(input);
    }
    else {
        showError(input, 'Email is not valid')
    }
 }

 function checkRequired(inputArr) {
    inputArr.forEach(element => {
        const formControl = element.parentElement;
        const label = formControl.querySelector('label');
        if (element.value.trim() === '') {
            showError(element, `'${label.innerText}' is required`);
        }
        else {
            showSuccess(element);
        }
    });
 }

 function checkLength(input, min, max) {
    const formControl = input.parentElement;
    const label = formControl.querySelector('label');
    if(input.value.length < min) {
        showError(input, `'${label.innerText}' must be at least ${min} characters`)
    }
    else if(input.value.length > max) {
        showError(input, `'${label.innerText}' must be less than ${max} characters`)
    }
    else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match!');
    }
}

 //Event listnerers
 form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
 });

