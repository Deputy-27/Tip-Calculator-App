// DOM elements
const billValue = document.getElementById('bill')
const peopleValue = document.getElementById('people')

const tipBtn = document.querySelectorAll('.button-container button')
const amountTip = document.querySelector('.tip-amount-value')
const amountTotal = document.querySelector('.total-amount-value')

const reset = document.querySelector('.reset')

// bill input value
billValue.addEventListener('change', () =>{
    reset.disabled = false;
})

// calculate
tipBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let btnValue = parseFloat(btn.innerText);
        let bVal = parseFloat(billValue.value);
        let pVal = parseFloat(peopleValue.value)
        

        let realTip = (bVal / 100) * btnValue;
        amountTip.innerText = (realTip / pVal).toFixed(2);
        amountTotal.innerText = ((bVal + realTip) / pVal).toFixed(2);
    })
})


// reset all inputs and texts
reset.addEventListener('click', () => {
    amountTip.innerText = "0.00"
    amountTotal.innerText = "0.00"
    billValue.value = "0";
    peopleValue.value = "0";
})