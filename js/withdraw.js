// Step: 1
document.getElementById('withdraw-button').addEventListener('click', function(){

    // Step-2
    const takeWithdrawFiled = document.getElementById('withdraw-field');
    let takeNewWithdrawFiledValue = takeWithdrawFiled.value;
    takeNewWithdrawFiledValue = parseFloat(takeNewWithdrawFiledValue);
    // console.log(takeNewWithdrawFiledValue)

    // Clear input field after deposit button click
    takeWithdrawFiled.value = '';


    // Step: 3

    const takePreviousWithdraw = document.getElementById('withdraw-number');
    let getPreviousWithdrawNumber = takePreviousWithdraw.innerText;
    getPreviousWithdrawNumber = parseFloat(getPreviousWithdrawNumber)
    // console.log(getPreviousWithdrawNumber)

    // Step: 4

    const currentWithdrawAmountTotal =  takeNewWithdrawFiledValue +  getPreviousWithdrawNumber;

    takePreviousWithdraw.innerText = currentWithdrawAmountTotal;
   
    

})