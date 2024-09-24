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

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('payment-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}