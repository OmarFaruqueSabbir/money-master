// input for income & expenses 
function getExpenseInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;

    const inputValue = parseFloat(inputText);
    return inputValue;

}


//income
document.getElementById('expense-btn').addEventListener('click',function(){
    const expenseAmount = getExpenseInputValue('income-input');
})

//expense
document.getElementById('expense-btn').addEventListener('click',function(){
    const expenseAmount = getExpenseInputValue('food-input');
    
})
document.getElementById('expense-btn').addEventListener('click',function(){
    const expenseAmount = getExpenseInputValue('rent-input');

})
document.getElementById('expense-btn').addEventListener('click',function(){
    const expenseAmount = getExpenseInputValue('clothes-input');

})

