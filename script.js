// dom vars
const formEl = document.querySelector('form');
const inputWrapperEl = document.querySelector('.email-box-wrapper');
const inputEl = document.getElementById('email-box');
const submitButtonEl = document.querySelector('.submit-btn');
let warningText = document.querySelector('.warning-text');

// other vars
let isError = false;

formEl.addEventListener('submit', (e) => {
    // prevent form from reload
    e.preventDefault()
})

// submit button
submitButtonEl.addEventListener('click', () => {
    // prevent submit if not valid email 
    // set isError to true
    if (!validEmail(inputEl)) {
        throwError();
        isError = true;
        return;
    }
    // sumnit form if valid 
    // set isError to false
    isError = false;
    submitForm();
})

inputEl.addEventListener('input', () => {
    // remove error on typing if available only if email is valid 
    if (isError) {
        if (validEmail(inputEl)) {
            inputWrapperEl.classList.remove('error');
            warningText.style.display = 'none';
        }
        else {
            throwError()
        }
    }  
})

// func to validate email input
function validEmail(input) {
    const regEx = /^([\w\-])+@([\w\-])+\.([\w]{2,8})((\.[\w]{2,8})+)?$/;
    return regEx.test(input.value);
}

// func to run if valid email
function submitForm() {
    inputEl.value = '';
    warningText.style.display = 'block';
    warningText.style.color = 'green';
    warningText.textContent = 'Form submited successfully...';
    setTimeout(() => {
        warningText.style.display = 'none';
        warningText.style.color = 'hsl(0, 93%, 68%)';
        warningText.textContent = 'Please provide a valid email';
    }, 2000);
}

function throwError() {
    inputWrapperEl.classList.add('error');
    warningText.style.display = 'block';
    console.log(warningText);
    
}