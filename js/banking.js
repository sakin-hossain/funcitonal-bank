function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText);
    // clear input field
    depositInput.value = '';
    
    return depositAmount;
}



// deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');


    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalBalance = parseFloat(depositTotal.innerText);

    depositTotal.innerText = depositTotalBalance + depositAmount;

    // update balance
    const balanceTotal =  document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;


})

//withdraw

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input')
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);

    withdrawTotal.innerText = withdrawAmount + withdrawTotalAmount;

    //Update balance
    const balanceTotal =  document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; 

})