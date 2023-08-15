document.getElementById('deposit-button').addEventListener('click', function(){
    // Step-2: Get the deposite amount from the deposit input field
    const takeDepositeInputField = document.getElementById('deposite-input-field');
    let depositeNewInputAmountValue = takeDepositeInputField.value;
    depositeNewInputAmountValue = parseFloat(depositeNewInputAmountValue)
    // console.log(depositeNewInputAmountValue)    
    // Clear input field after deposit button click
    takeDepositeInputField.value = '';

    if(isNaN(depositeNewInputAmountValue)){
        alert('Please put a number')
        return;
    }


    // Step-3: Take the deposit previous number that means the first time it is 00$
    const takePreviousDepositTotal = document.getElementById('deposit-total');
    let depositPreviousTotalNumber = takePreviousDepositTotal.innerText;
    // console.log(typeof(depositPreviousTotalNumber))
    depositPreviousTotalNumber = parseFloat(depositPreviousTotalNumber);
    // console.log(typeof(depositPreviousTotalNumber))
    
    // Step-4: Make the sum of the new input value with the previous number in Current. 

    const currentDepositTotalNumber = depositeNewInputAmountValue + depositPreviousTotalNumber;   
    
    takePreviousDepositTotal.innerText = currentDepositTotalNumber;


     // Step-5: Same as above take the deposit previous total balance that means the first time it is 1540$

     const takePreviousTotalBalance = document.getElementById('total-balance');
     let getPreviousTotalBalanceNumber = takePreviousTotalBalance.innerText;
     getPreviousTotalBalanceNumber = parseFloat(getPreviousTotalBalanceNumber);
 
     const currentDepositTotalBalance = getPreviousTotalBalanceNumber + depositeNewInputAmountValue;
 
     takePreviousTotalBalance.innerText = currentDepositTotalBalance;

   

})