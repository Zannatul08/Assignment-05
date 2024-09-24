document.getElementById('donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // const amount = getInputFieldValueById('donation-amount') ;
        const amount = parseFloat(getInputFieldValueById('donation-amount'));

        if (isNaN(amount) || amount < 0) {
            alert('Invalid Donation Amount');
            return;
        }

        const balance = getTextFieldValueByID('account-balance');
        if (balance < amount) {
            alert('You do not have sufficient balance');
            return;
        }

        const newBalance = balance - amount;
        document.getElementById('account-balance').innerText = newBalance + " BDT";

        //  const card1_amount = getTextFieldValueById('c1_balance');
        //  const card_balance = amount + card1_amount;
        // document.getElementById('c1_balance').innerText = card_balance;

        // const amount = parseFloat(getInputFieldValueById('donation-amount')); 
        const card1_amount = getTextFieldValueByID('c1_balance');
        const card_balance = amount + card1_amount;
        document.getElementById('c1_balance').innerText = card_balance + " BDT";

        const donationPurpose1 = getDonationPurpose('card-1');

        const donationCard = document.createElement('div');
        donationCard.classList.add('card', 'bg-base-100', 'shadow-xl', 'p-4', 'mt-4'); 

        const p = document.createElement('p');  
        p.style.fontWeight = 'bold';
        // p.classList.add('bold');
        // console.log('Donation Purpose:', donationPurpose1);
        p.innerText = `${amount} Taka is Donated ${donationPurpose1}`;
       
        const date = document.createElement('p');
        // const d = new Date();
        // document.getElementById("demo").innerHTML = d;
         date.classList.add('text-base', 'text-gray-500','font-light');
          date.innerText = `Date: ${new Date()}`;

        donationCard.appendChild(p);
        donationCard.appendChild(date);
        // Append the donationCard to the payment-container
        document.getElementById('payment-container').appendChild(donationCard);


        // const card2_amount = getTextFieldValueByID('c2_balance');
        // const card_balance2 = amount + card2_amount;
        // document.getElementById('c2_balance').innerText = card_balance2 + " BDT";

    }

    )



document.getElementById('donate-btn2')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // const amount = getInputFieldValueById('donation-amount') ;
        const amount = parseFloat(getInputFieldValueById('donation-amount2'));

        if (isNaN(amount) || amount < 0) {
            alert('Invalid Donation Amount');
            return;
        }

        const balance = getTextFieldValueByID('account-balance');
        if (balance < amount) {
            alert('You do not have sufficient balance');
            return;
        }

        const newBalance = balance - amount;
        document.getElementById('account-balance').innerText = newBalance + " BDT";


        const card2_amount = getTextFieldValueByID('c2_balance');
        const card_balance2 = amount + card2_amount;
        document.getElementById('c2_balance').innerText = card_balance2 + " BDT";

        const donationPurpose2 = getDonationPurpose('card-2');
        const donationCard = document.createElement('div');
        donationCard.classList.add('card', 'bg-base-100', 'shadow-xl', 'p-4', 'mt-4'); 

        const p = document.createElement('p');
       
        p.style.fontWeight = 'bold';
        // p.classList.add('bold');
        // console.log('Donation Purpose:', donationPurpose1);
        p.innerText = `${amount} Taka is Donated ${donationPurpose2}`;
         
        donationCard.appendChild(p);

        // Append the donationCard to the payment-container
        document.getElementById('payment-container').appendChild(donationCard);

    }

    )


document.getElementById('donate-btn3')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // const amount = getInputFieldValueById('donation-amount') ;
        const amount = parseFloat(getInputFieldValueById('donation-amount3'));

        if (isNaN(amount) || amount < 0) {
            alert('Invalid Donation Amount');
            return;
        }

        const balance = getTextFieldValueByID('account-balance');
        if (balance < amount) {
            alert('You do not have sufficient balance');
            return;
        }

        const newBalance = balance - amount;
        document.getElementById('account-balance').innerText = newBalance + " BDT";


        const card3_amount = getTextFieldValueByID('c3_balance');
        const card_balance3 = amount + card3_amount;
        document.getElementById('c3_balance').innerText = card_balance3 + " BDT";


        const donationPurpose3 = getDonationPurpose('card-3');
        const donationCard = document.createElement('div');
        donationCard.classList.add('card', 'bg-base-100', 'shadow-xl', 'p-4', 'mt-4'); 

        const p = document.createElement('p');
       
        p.style.fontWeight = 'bold';
        // p.classList.add('bold');
        // console.log('Donation Purpose:', donationPurpose1);
        p.innerText = `${amount} Taka is Donated ${donationPurpose3}`;
         
        donationCard.appendChild(p);

        // Append the donationCard to the payment-container
        document.getElementById('payment-container').appendChild(donationCard);

    }

    )