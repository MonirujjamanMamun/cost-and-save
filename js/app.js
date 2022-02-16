function convert(id) {
    const input = document.getElementById(id);
    const inputValue = input.value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

/* function changeText(id, str) {
    const input = document.getElementById(id);
    const value = input.innerText = str;
    return value;
}
 */
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

    // const aa = changeText('total-expense', expenseTotal)

    const totalExpense = document.getElementById('total-expense');
    const value = totalExpense.innerText = expenseTotal;

    const balanceTotal = incomeNumber - expenseTotal;

    const balance = document.getElementById('total-balance');
    balance.innerText = balanceTotal;
    console.log(balance)


    // balance update 








})