document.getElementById('deposit-button').addEventListener('click', function(){
    const takeDepositeInputField = document.getElementById('deposite-input-field');
    const depositeInputAmountValue = takeDepositeInputField.value;
    // console.log(depositeInputAmountValue)


    // Step: 2
    const takeDepositTotal = document.getElementById('deposit-total');
    const depositTotalNumber = takeDepositTotal.innerText;
    // console.log(depositTotalNumber)
    takeDepositTotal.innerText = depositeInputAmountValue;
})