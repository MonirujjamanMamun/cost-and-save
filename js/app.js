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

    const expenseTotal = foodNumber + rentNumber + clotheNumber;

    // total expenses update 

    changeText('total-expense', expenseTotal)

    /*   const totalExpense = document.getElementById('total-expense');
      const value = totalExpense.innerText = expenseTotal; */

    const balanceTotal = incomeNumber - expenseTotal;

    changeText('total-balance', balanceTotal)
        /*  const balance = document.getElementById('total-balance');
         balance.innerText = balanceTotal; */



    // balance update 

})

document.getElementById('save-btn').addEventListener('click', function() {
    const mainBalance = convert('income-input');

    const saveInput = convert('saving-input');

    const savingMoney = (mainBalance * saveInput) / 100;

    changeText('saving-amount', savingMoney)
        /* const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = savingMoney; */


    const balance = document.getElementById('total-balance');
    const currentBalance = balance.innerText;
    const remainingBalance = currentBalance - savingMoney;

    changeText('remaining-balance', remainingBalance)
        /* const totalBalance = document.getElementById('remaining-balance');
        totalBalance.innerText = remainingBalance; */
})