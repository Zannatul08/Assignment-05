function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextFieldValueByID(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}



function getDonationPurpose(cardId) {
    const h2Element = document.querySelector(`#${cardId} .card-title`);
    if (h2Element) {
        let fullText = h2Element.innerText.trim(); 

        
        if (fullText.startsWith("Donate ")) {
            return fullText.substring(7); 
        } else if (fullText.startsWith("Aid ")) {
            return fullText.substring(4); 
        }
        
       
        return fullText;
    }
    return null;
}

// Example usage:
// const donationPurpose1 = getDonationPurpose('card-1'); // For card 1
// console.log(donationPurpose1); // Output depends on the card content

// const donationPurpose2 = getDonationPurpose('card-2'); // For card 2
// console.log(donationPurpose2); // Output depends on the card content

// const donationPurpose3 = getDonationPurpose('card-3');