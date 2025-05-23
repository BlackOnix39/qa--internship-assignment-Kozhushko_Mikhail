const emailInput = document.getElementById('email');
const validateBtn = document.getElementById('checkBtn');
const msg = document.getElementById('msg');
        
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}

function showMsg(text, isSuccess) {
    msg.textContent = text;
    msg.classList.add(isSuccess ? 'success' : 'error');
    msg.classList.remove(isSuccess ? 'error' : 'success');
    // msg.innerHTML = text;
}

validateBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();

    if (!email) {
        showMsg('Поле "email" должно быть заполнено!', false);
        emailInput.focus();
        return;
    }
    
    if (validateEmail(email)) {
        showMsg('Проверка валидации email успешно пройдена!', true);
    } 
    else {
        showMsg('Некорректный email. Попробуйте снова', false);
    }
});