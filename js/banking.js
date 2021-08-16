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

    return totalField.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal =  document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal =  document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    
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
    if(depositAmount > 0){
        // get and update deposit
    updateTotalField('deposit-total', depositAmount);
    // update balance
    updateBalance(depositAmount, true);
    }
    else{
        alert('please provide positive value');
    }

})

//withdraw

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const CurrentBalance = getCurrentBalance();
    const withdrawAmount = getInputValue('withdraw-input')
    if(withdrawAmount > 0 && withdrawAmount < CurrentBalance){
    // get and update withdraw
    updateTotalField('withdraw-total', withdrawAmount)
    //Update balance
    updateBalance(withdrawAmount, false);
    }
    else{
        alert('please provide positive value');
    }
})
