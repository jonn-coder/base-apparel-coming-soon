const formEl = document.querySelector('form');
const inputEl = document.getElementById('email-box');
const submitButtonEl = document.querySelector('.submit-btn');
const messageEl = document.querySelector('.message');
const messageTextEl = document.querySelector('.message small');

let isError = false;

formEl.addEventListener('submit', (e) => {
    // prevent form from reload
    e.preventDefault()
})

// submit button
submitButtonEl.addEventListener('click', () => {
    // prevent submit if not valid email 
    if (!validEmail(inputEl)) {
        errorMsg();
        isError = true;
        return;
    }
    // sumnit form 
    isError = false;
    clearErrorMsg();
    successMsg();
})

inputEl.addEventListener('input', () => {
    // remove error on typing if available only if email is valid 
    if (isError) {
        if (validEmail(inputEl)) {
            clearErrorMsg();
        }
        else {
            errorMsg();
        }
    }  
})

// func to validate email input
function validEmail(input) {
    const regEx = /^([\w\-])+@([\w\-])+\.([\w]{2,8})((\.[\w]{2,8})+)?$/;
    return regEx.test(input.value);
}

function clearErrorMsg() {
    if(isError){
        messageEl.classList.remove('unsuccessful');
        formEl.classList.remove('error');
    }
}

function errorMsg() {
    messageTextEl.style.display = 'initial';
    formEl.classList.add('error');
    messageEl.classList.add('unsuccessful');
}

function successMsg() {
    messageEl.classList.add('successful');
    inputEl.value = '';
    setTimeout(() => {
        messageEl.classList.remove('successful');
        messageTextEl.style.display = 'none';
    }, 2000);
}


