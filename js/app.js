function convert(id) {
    const input = document.getElementById(id);
    const inputValue = input.value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function changeText(id, str) {
    const input = document.getElementById(id);
    const value = input.innerText = str;
    return value;
}


document.getElementById('expenses-btn').addEventListener('click', function() {
    // income 
    const incomeNumber = convert('income-input');
    // expenses
    const foodNumber = convert('food-input');
    // rent
    const rentNumber = convert('rent-input');
    // clothes
    const clotheNumber = convert('clothes-input');
    // error Messes 
    const errorMsses = document.getElementById('error-msses');

    // validation 
    if (incomeNumber < 0 || foodNumber < 0 || rentNumber < 0 || clotheNumber < 0) {
        errorMsses.style.display = 'block'
    } else if (isNaN(incomeNumber) || isNaN(foodNumber) || isNaN(rentNumber) || isNaN(clotheNumber)) {
        errorMsses.style.display = 'block'
    } else {
        // total expense 
        const expenseTotal = foodNumber + rentNumber + clotheNumber;
        // total expenses update 
        changeText('total-expense', expenseTotal)
            // error 
        const errorMsses3 = document.getElementById('error-msses3');
        // validation 
        if (incomeNumber < expenseTotal) {
            errorMsses3.style.display = 'block';
        } else {
            // total balance 
            const balanceTotal = incomeNumber - expenseTotal;
            // total balance update
            changeText('total-balance', balanceTotal);
            errorMsses3.style.display = 'none'
        }

        errorMsses.style.display = 'none'
    }
})

document.getElementById('save-btn').addEventListener('click', function() {
    const balance = document.getElementById('total-balance');

    const currentBalance = balance.innerText;
    const currentNumbers = parseFloat(currentBalance)

    const mainBalance = convert('income-input');
    const saveInput = convert('saving-input');
    const errorMsses2 = document.getElementById('error-msses2');
    const errorMsses4 = document.getElementById('error-msses4');
    // validation 
    if (saveInput < 0) {
        errorMsses2.style.display = 'block'
    } else if (isNaN(saveInput)) {
        errorMsses2.style.display = 'block'
    } else {

        // parcentense calculation
        const savingMoney = (mainBalance * saveInput) / 100;

        if (currentNumbers < savingMoney) {
            errorMsses4.style.display = 'block'
        } else {
            // saving Amount update
            changeText('saving-amount', savingMoney)

            const remainingBalance = currentBalance - savingMoney;

            // remaining Balance update 
            changeText('remaining-balance', remainingBalance)
            errorMsses4.style.display = 'none'
        }


        errorMsses2.style.display = 'none'
    }
})