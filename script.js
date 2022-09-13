let cardInput = document.querySelector("#card");
let cardNumber = document.querySelector(".card-number");

cardInput.addEventListener ('keypress', (event) => {
    
    const keyName = event.key;
    let value = cardInput.value;
    if( ! Number.isInteger(parseInt(keyName)) ) {
        event.preventDefault();
        return;
    }
    if( value.length > 18) {
        event.preventDefault();
        return;
    }

    if( value.length < 15 && value.length >= 1 && ( (parseInt(value.replace(/\D/g,'').length) % 4) === 0 ) ) {
        event.preventDefault();
        cardInput.value+=" "+keyName;
        cardNumber.innerHTML = cardInput.value;    
    } else 
        cardNumber.innerHTML = cardInput.value+keyName;
        
  });