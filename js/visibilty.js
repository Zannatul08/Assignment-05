function handleSelectBtn(selectedBtn) {
   
    const donationBtn = document.getElementById('show-donation-section');
    const paymentBtn = document.getElementById('show-payment-section');

 
    donationBtn.classList.remove('bg-btn_primary_bg');
    donationBtn.classList.add('bg-white'); 

    paymentBtn.classList.remove('bg-btn_primary_bg');
    paymentBtn.classList.add('bg-white');

    
    selectedBtn.classList.remove('bg-white'); 
    selectedBtn.classList.add('bg-btn_primary_bg'); 
}


document.getElementById('show-donation-section').addEventListener('click', function() {
    showSectionById('donation-section');
    handleSelectBtn(this); 
});

document.getElementById('show-payment-section').addEventListener('click', function() {
    showSectionById('payment-section');
    handleSelectBtn(this); 
});



// document.getElementById('show-donation-section')
// .addEventListener('click',function(event){
//      removeHighlightFromButtons();
//     this.classList.add('bg-btn_primary_bg');
//    showSectionById('donation-section');
// });

//  document.getElementById('show-payment-section')
//  .addEventListener('click',function(event){
//      removeHighlightFromButtons();
//      this.classList.add('bg-btn_primary_bg');
//      showSectionById('payment-section');
//  });

// document.getElementById('show-donation-section')
// .addEventListener('click',function(){
  
//     this.classList.add('btn_primary_bg');
//     showSectionById('donation-section');
// });

// document.getElementById('show-payment-section')
// .addEventListener('click',function(){

//     this.classList.add('btn_primary_bg');
//     showSectionById('payment-section');
// });

//  document.getElementById('show-donation-section').addEventListener('click',function(){
//    showSectionById('donation-section')
//  });


//  document.getElementById('show-payment-section').addEventListener('click',function(){
//      showSectionById('payment-section')
//  });

//  function handleSelectBtn(event){
//     event.classList.add('bg-btn_primary_bg');
// }

// document.getElementById('show-donation-section').addEventListener('click', function() {
//     showSectionById('donation-section');
// });

// document.getElementById('show-payment-section').addEventListener('click', function() {
//     showSectionById('payment-section');
// });

