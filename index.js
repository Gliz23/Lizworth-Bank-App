

const loginSection = document.getElementById('login-area'),
    dashboard = document.getElementById('dashboard'),
    cashIn = document.getElementById('deposit'),
    cashOut = document.getElementById('withdraw'),
    balance = document.getElementById('balance'),
    cashInInput = document.getElementById('deposit-input'),
    cashOutInput =document.getElementById('withdraw-input'),
    cashInButton = document.getElementById('deposit-btn'),
    cashOutButton = document.getElementById('withdraw-btn'),
    submitButton = document.getElementById('submit-btn'),
    passwordTextBox = document.querySelector('.js-password');
    emailTextBox = document.querySelector('.js-email');
    

   
submitButton.addEventListener('click', () => {
    if (passwordTextBox.value === '' || emailTextBox.value === '') {
        if (passwordTextBox.value === '') {
            alert('Please enter your password');
        }
        if (emailTextBox.value === '') {
            alert('Please enter your email');
        }
    } else {
        loginSection.style.display = 'none';
        dashboard.classList.remove('d-none'); 
    }
});



   

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

document.body.addEventListener("keydown", (event) => {
    if (event.key === "d") {
      document.getElementById("deposit-btn").click();
    }
  });
  
  document.body.addEventListener("keydown", (event) => {
    if (event.key === "w") {
      document.getElementById("withdraw-btn").click();
    }
  });

//   if (passwordTextBox.value = ''){
//         alert('Please enter your password')
//     }else if (emailTextBox.value = ''){
//         alert('Please enter your email')
//     }else{
//         document.body.addEventListener("keydown", (event) => {
//             if (event.key === "Enter") {
//               document.getElementById("submit-btn").click();
//             }
//           });
//     }

  