function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextFieldValueByID(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('payment-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

