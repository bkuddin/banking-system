//Step-1: Add Click Event Handler with The Submit Button

document.getElementById('login-button').addEventListener('click', function(){
    
    //==== Step-2: Get email address inside the email input field.
    const takeEmailInputField = document.getElementById('user-email');
    const getEmailAddValue = takeEmailInputField.value;
    // console.log(getEmailAddValue);

    //==== Step-3: Get the password inside the password input field.

    const takePasswordInputField = document.getElementById('user-password');
    const getPasswordValue = takePasswordInputField.value;
    // console.log(getPasswordValue);

    // ==== Step-4: Verify email and password and check whether valid user or not
    // DO NOT Verify email password in this way on the client side. This is for basic learning.

    if(getEmailAddValue === 'bkuddin@io.com' && getPasswordValue === 'secret'){
        console.log('Valid User')
    }
    else{
        console.log('Invalid User')
    }

    

})