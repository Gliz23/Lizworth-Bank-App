

const loginSection = document.getElementById('login-area'),
    dashboard = document.getElementById('dashboard'),
    cashIn = document.getElementById('deposit'),
    cashOut = document.getElementById('withdraw'),
    balance = document.getElementById('balance'),
    cashInInput = document.getElementById('deposit-input'),
    cashOutInput =document.getElementById('withdraw-input'),
    cashInButton = document.getElementById('deposit-btn'),
    cashOutButton = document.getElementById('withdraw-btn'),
    submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', () => {
    loginSection.style.display = 'none';
    dashboard.classList.remove('d-none');
})

cashInButton.addEventListener('click', () => {
    const value = cashInInput.value;
    const cashInValue = Number(cashIn.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    cashIn.innerText = cashInValue
    balance.innerText = balanceValue
    cashInInput.value = ''
})

cashOutButton.addEventListener('click', () => {
    const value = cashOutInput.value;
    if (Number(balance.innerText) === 0 && Number(value)!=0){
        alert('Empty account')
    } else if (Number(value) > Number(balance.innerText)) {
        alert('Not enough money')
    } else {
        const cashOutValue = Number(cashOut.innerText) + Number(value);
        const balanceValue = Number(balance.innerText) - Number(value);
        cashOut.innerText = cashOutValue
        balance.innerText = balanceValue
        cashOutInput.value = ''
    }
})