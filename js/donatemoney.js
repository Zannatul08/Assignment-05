document.getElementById('donate-btn')
.addEventListener('click', function(event) {
    event.preventDefault();
    // const amount = getInputFieldValueById('donation-amount') ;
    const amount = parseFloat(getInputFieldValueById('donation-amount'));

    if(isNaN(amount)){
        alert('Invalid Donation Amount');
        return;
    }

    const balance = getTextFieldValueByID('account-balance');
    if(balance<amount)
    {
        alert('You do not have sufficient balance');
        return;
    }

    const newBalance = balance - amount;
     document.getElementById('account-balance').innerText = newBalance + " BDT";

    //  const card1_amount = getTextFieldValueById('c1_balance');
    //  const card_balance = amount + card1_amount;
    // document.getElementById('c1_balance').innerText = card_balance;

    // const amount = parseFloat(getInputFieldValueById('donation-amount')); // Convert amount to a number
const card1_amount = getTextFieldValueByID('c1_balance');
const card_balance = amount + card1_amount;
document.getElementById('c1_balance').innerText = card_balance + " BDT";



// const card2_amount = getTextFieldValueByID('c2_balance');
// const card_balance2 = amount + card2_amount;
// document.getElementById('c2_balance').innerText = card_balance2 + " BDT";

}

)



document.getElementById('donate-btn2')
.addEventListener('click', function(event) {
    event.preventDefault();
    // const amount = getInputFieldValueById('donation-amount') ;
    const amount = parseFloat(getInputFieldValueById('donation-amount2'));

    if(isNaN(amount)){
        alert('Invalid Donation Amount');
        return;
    }

    const balance = getTextFieldValueByID('account-balance');
    if(balance<amount)
    {
        alert('You do not have sufficient balance');
        return;
    }

    const newBalance = balance - amount;
     document.getElementById('account-balance').innerText = newBalance + " BDT";

    //  const card1_amount = getTextFieldValueById('c1_balance');
    //  const card_balance = amount + card1_amount;
    // document.getElementById('c1_balance').innerText = card_balance;

    // const amount = parseFloat(getInputFieldValueById('donation-amount')); // Convert amount to a number
// const card1_amount = getTextFieldValueByID('c1_balance');
// const card_balance = amount + card1_amount;
// document.getElementById('c1_balance').innerText = card_balance + " BDT";



 const card2_amount = getTextFieldValueByID('c2_balance');
 const card_balance2 = amount + card2_amount;
 document.getElementById('c2_balance').innerText = card_balance2 + " BDT";

}

)