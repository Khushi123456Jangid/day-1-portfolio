let expenses=[];
function addExpense(){
    let name=document.getElementById('expenseName').value;
    let amount=Number(document.getElementById('expenseAmount').value);
    if(name==="" || amount<0){
        alert("Please enter valid value");
        return;
    }
    let expense={
        name: name,
        amount: amount
    };
    expenses.push(expense);
    displayExpenses();
}
function deleteExpense(){
    let name=document.getElementById('expenseName').value;
    let amount=Number(document.getElementById('expenseAmount').value);
    if(expenses===0){
        alert("Please enter value");
    }    
    let expense={
        name: name,
        amount: amount
    };
    expenses.pop(expense);
    displayExpenses();
}
function displayExpenses(){
    let list=document.getElementById('expenseList');
    list.innerHTML="";
    let total=0;
    // maximum
    let maxEx=expenses[0].amount;
    for(let i=0;i<expenses.length;i++){
        if(maxEx<expenses[i].amount){
            maxEx=expenses[i].amount;
        }
    }
    document.getElementById('high').innerText=maxEx;
    // total
    for(let expense of expenses){
        total += expense.amount;
    
    list.innerHTML += `
        <div class="expense">
            <span>${expense.name}</span>
            <span>${expense.amount}</span>
        </div>
    `;
    }
    document.getElementById('total').textContent=total;
    document.getElementById('count').textContent=expenses.length;

}
function searchExpense(){
    let name=document.getElementById('expenseName').value;
    let amount=Number(document.getElementById('expenseAmount').value);
    let searchItem=document.getElementById('searchItem');
    searchItem.innerHTML=""
    if(searchItem===""){
        alert("Please enter value");
    }    
    let expense={
        name: name,
        amount: amount
    };
    let searchName=document.getElementById('expenseTypeName').value;
    for(let expense of expenses){
        if(expense.name.toLowerCase().includes(searchName.toLowerCase())){
            searchItem.innerHTML=`
                <div class="expense">
                    <span>${searchName}</span>
                    <span>${expense.amount}</span>
                </div>
            `
        }
    }
}