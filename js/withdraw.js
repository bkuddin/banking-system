// Step: 1
document.getElementById('withdraw-button').addEventListener('click', function(){

    // Step-2
    const takeWithdrawFiled = document.getElementById('withdraw-field');
    let takeWithdrawFiledValue = takeWithdrawFiled.value;
    takeWithdrawFiledValue = parseFloat(takeWithdrawFiledValue);
    // console.log(takeWithdrawFiledValue)


    // Step: 3

    const takePreviousWithdraw = document.getElementById('withdraw-number');
    let getPreviousWithdrawNumber = takePreviousWithdraw.innerText;
    getPreviousWithdrawNumber = parseFloat(getPreviousWithdrawNumber)
    // console.log(getPreviousWithdrawNumber)
   
    

})