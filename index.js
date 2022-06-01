/* // input for income & expenses 
function getExpenseInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = parseFloat(input.value);
    // const input1 = parseFloat(inputText);
    // const btn = document.getElementById('calculate-btn');

    // const inputValue = inputText;
    if (!isNaN(inputText) && inputText > -1) {
        return inputText;
    }
    else {
        alert('put numbers and should be positive');
        input.value = '';
        // btn.setAttribute('disabled',true);
    }

}
//total expense & remaining balance
function expenseTotalField() {

    const incomeAmount = getExpenseInputValue('income-input');
    const foodCost = getExpenseInputValue('food-input');
    const rentCost = getExpenseInputValue('rent-input');
    const clothCost = getExpenseInputValue('clothes-input')
    const expenseInput = document.getElementById('expense-total');
    const expenseAmount = foodCost + rentCost + clothCost;

    const btn = document.getElementById('calculate-btn');

    if (typeof incomeAmount == 'number' && typeof expenseAmount == 'number' && incomeAmount > expenseAmount) {
        expenseInput.innerText = expenseAmount;
        const totalBalance = incomeAmount - expenseAmount;
        const balanceInput = document.getElementById('balance-total');
        balanceInput.innerText = totalBalance;
        return totalBalance;
    }
    else {
        alert('expenses should be less than income');
        btn.setAttribute('disabled', true);
        btn.style.backgroundColor = 'red';
        btn.innerText = 'invalid';
}
}

function savingAmount(saveId) {
    const saveAmount = document.getElementById(saveId);
    const saveAmountText = saveAmount.value;
    const savePercent = parseFloat(saveAmountText);
    saveAmount.value = savePercent;

    const incomeInput = document.getElementById('income-input').value;
    const income = parseFloat(incomeInput);

    const saveBalance = document.getElementById('save-total').innerText = ((income * saveAmount.value) / 100);

    const balanceInput = document.getElementById('balance-total').innerText;
    const balance = parseFloat(balanceInput);

    const remaining = document.getElementById('remaining-total').innerText = balance - saveBalance;

    if (saveBalance > balance) {
        document.getElementById('save-total').innerText = '00';
        document.getElementById('save-total').style.color = 'red';
    }
}

//income
document.getElementById('calculate-btn').addEventListener('click', function () {
   expenseTotalField();
})

//expense
// document.getElementById('calculate-btn').addEventListener('click', function () {
//     const expenseAmount = getExpenseInputValue('food-input');
//     expenseTotalField();
// })
// document.getElementById('calculate-btn').addEventListener('click', function () {
//     const expenseAmount = getExpenseInputValue('rent-input');
//     expenseTotalField();
// })
// document.getElementById('calculate-btn').addEventListener('click', function () {
//     const expenseAmount = getExpenseInputValue('clothes-input');
//     expenseTotalField();
// })

//save
document.getElementById('save-btn').addEventListener('click', function () {
    const saveAmount = savingAmount('save-input');
}) */

// input for income & expenses 
function getExpenseInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = parseFloat(input.value);
    // const input1 = parseFloat(inputText);
    // const btn = document.getElementById('calculate-btn');

    // const inputValue = inputText;
    if (!isNaN(inputText) && inputText > -1) {
        return inputText;
    }
    else {
        alert('put numbers and should be positive');
        // btn.setAttribute('disabled',true);
    }

}
//total expense & remaining balance
function expenseTotalField(totalId, amount) {
    const totalExpense = document.getElementById(totalId);
    const totalText = totalExpense.innerText;
    const previousTotal = parseFloat(totalText);
    totalExpense.innerText = previousTotal + amount;


    const incomeInput = document.getElementById('income-input').value;
    const income = parseFloat(incomeInput);
    const balanceField = income - totalExpense.innerText;
    document.getElementById('balance-total').innerText = balanceField;

    const btn = document.getElementById('calculate-btn');


    if (totalExpense.innerText > income) {
        alert('expenses should be less than income');
        btn.setAttribute('disabled', true);
        btn.style.backgroundColor = 'red';
        btn.innerText = 'invalid';
    }
}

function savingAmount(saveId) {
    const saveAmount = document.getElementById(saveId);
    const saveAmountText = saveAmount.value;
    const savePercent = parseFloat(saveAmountText);
    saveAmount.value = savePercent;

    const incomeInput = document.getElementById('income-input').value;
    const income = parseFloat(incomeInput);

    const saveBalance = document.getElementById('save-total').innerText = ((income * saveAmount.value) / 100);

    const balanceInput = document.getElementById('balance-total').innerText;
    const balance = parseFloat(balanceInput);

    const remaining = document.getElementById('remaining-total').innerText = balance - saveBalance;

    if (saveBalance > balance) {
        document.getElementById('save-total').innerText = '00';
        document.getElementById('save-total').style.color = 'red';
    }
}

//income
document.getElementById('calculate-btn').addEventListener('click', function () {
    const expenseAmount = getExpenseInputValue('income-input');
})

//expense
document.getElementById('calculate-btn').addEventListener('click', function () {
    const expenseAmount = getExpenseInputValue('food-input');
    expenseTotalField('expense-total', expenseAmount);
})
document.getElementById('calculate-btn').addEventListener('click', function () {
    const expenseAmount = getExpenseInputValue('rent-input');
    expenseTotalField('expense-total', expenseAmount);
})
document.getElementById('calculate-btn').addEventListener('click', function () {
    const expenseAmount = getExpenseInputValue('clothes-input');
    expenseTotalField('expense-total', expenseAmount);
})

//save
document.getElementById('save-btn').addEventListener('click', function () {
    const saveAmount = savingAmount('save-input');
})