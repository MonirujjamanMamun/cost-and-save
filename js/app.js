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


    // validation 
    if (incomeNumber < 0) {
        console.log('Please, give correct number.')
    } else if (isNaN(incomeNumber)) {
        console.log('It is not a number.')

    } else {

        // expenses
        const foodNumber = convert('food-input');

        // rent
        const rentNumber = convert('rent-input');

        // clothes
        const clotheNumber = convert('clothes-input');

        // total expense 
        const expenseTotal = foodNumber + rentNumber + clotheNumber;

        // total expenses update 
        changeText('total-expense', expenseTotal)

        // total balance 
        const balanceTotal = incomeNumber - expenseTotal;

        // total balance update
        changeText('total-balance', balanceTotal)

    }

})

document.getElementById('save-btn').addEventListener('click', function() {

    const mainBalance = convert('income-input');
    const saveInput = convert('saving-input');

    // parcentense calculation
    const savingMoney = (mainBalance * saveInput) / 100;

    // saving Amount update
    changeText('saving-amount', savingMoney)


    const balance = document.getElementById('total-balance');
    const currentBalance = balance.innerText;
    const remainingBalance = currentBalance - savingMoney;

    // remaining Balance update 
    changeText('remaining-balance', remainingBalance)

})