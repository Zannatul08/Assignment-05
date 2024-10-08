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

        // const donationPurpose1 = getDonationPurpose('card-1');
        const donationPurpose1 = document.getElementById('heading1').innerText;
        const donationCard = document.createElement('div');
        // border border-card_section_border rounded-2xl p-4 gap-8 mt-8
        donationCard.classList.add('card', 'bg-base-100', 'p-4', 'mt-4', 'border', 'border-card_section_border');

        const p = document.createElement('p');
        p.style.fontWeight = 'bold';
        // p.classList.add('bold');

        p.innerText = `${amount} Taka is Donated for ${donationPurpose1}`;

        const date = document.createElement('p');
        // const d = new Date();
        // document.getElementById("demo").innerHTML = d;
        date.classList.add('text-base', 'text-gray-500', 'font-light');
        date.innerText = `Date: ${new Date()}`;

        donationCard.appendChild(p);
        donationCard.appendChild(date);

        document.getElementById('payment-container').appendChild(donationCard);


        // const card2_amount = getTextFieldValueByID('c2_balance');
        // const card_balance2 = amount + card2_amount;
        // document.getElementById('c2_balance').innerText = card_balance2 + " BDT";

        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();
        }



    }

    )



document.getElementById('donate-btn2')
    .addEventListener('click', function (event) {
        event.preventDefault();

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


        const donationPurpose2 = document.getElementById('heading2').innerText;
        const donationCard = document.createElement('div');
        // donationCard.classList.add('card', 'bg-base-100', 'shadow-xl', 'p-4', 'mt-4'); 
        donationCard.classList.add('card', 'bg-base-100', 'p-4', 'mt-4', 'border', 'border-card_section_border');
        const p = document.createElement('p');

        p.style.fontWeight = 'bold';

        p.innerText = `${amount} Taka is Donated for ${donationPurpose2}`;


        const date = document.createElement('p');

        date.classList.add('text-base', 'text-gray-500', 'font-light');
        date.innerText = `Date: ${new Date()}`;

        donationCard.appendChild(p);
        donationCard.appendChild(date);

        document.getElementById('payment-container').appendChild(donationCard);

        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();
        }
    }

    )


document.getElementById('donate-btn3')
    .addEventListener('click', function (event) {
        event.preventDefault();

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


        const donationPurpose3 = document.getElementById('heading3').innerText;
        const donationCard = document.createElement('div');

        donationCard.classList.add('card', 'bg-base-100', 'p-4', 'mt-4', 'border', 'border-card_section_border');
        const p = document.createElement('p');

        p.style.fontWeight = 'bold';

        p.innerText = `${amount} Taka is Donated for ${donationPurpose3}`;

        const date = document.createElement('p');

        date.classList.add('text-base', 'text-gray-500', 'font-light');
        date.innerText = `Date: ${new Date()}`;

        donationCard.appendChild(p);
        donationCard.appendChild(date);

        document.getElementById('payment-container').appendChild(donationCard);


        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();
        }
    }

    )