function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    const totalField = document.getElementById(totalFieldId);
    const previousTotal = parseFloat(totalField.innerText);

    totalField.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd){
    const balanceTotal =  document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


// deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    // get and update deposit
    updateTotalField('deposit-total', depositAmount);
    // update balance
    updateBalance(depositAmount, true);

})

//withdraw

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input')
    // get and update withdraw
    updateTotalField('withdraw-total', withdrawAmount)
    //Update balance
    updateBalance(withdrawAmount, false);
})