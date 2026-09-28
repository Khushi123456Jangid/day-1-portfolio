// get html elements by id
let expenseForm=document.getElementById('expenseForm');
let titleInput=document.getElementById('title');
let amountInput=document.getElementById('amount');
let categoryInput=document.getElementById('category');
let dateInput=document.getElementById('date');
let expenseList=document.getElementById('expenseList');
let totalElement=document.getElementById('total');
let clearBtn=document.getElementById('clearBtn');
// create expenses array
let expenses=JSON.parse(localStorage.getItem('expenses'))||[];
// form sumit
expenseForm.addEventListener("submit",function(event){
    event.preventDefault();
    let title=titleInput.value.trim();
    let amount=Number(amountInput.value);
    let category=categoryInput.value;
    let date=dateInput.value;
    // create objects
    let expense={
        id:Date.now(),
        title:title,
        amount:amount,
        category:category,
        date:date
    };
    // add expense in expenses array
    expenses.push(expense);
    // save expenses
    saveExpenses();
    // display expenses
    displayExpenses();
    expenseForm.reset();
});
// storing the data in th e local storage
function saveExpenses(){
    localStorage.setItem('expenses',JSON.stringify(expenses));
}
// display the data
function displayExpenses(){
    expenseList.innerHTML="";
    let total=0;
    expenses.forEach(function(expense)
        {
            total += expense.amount;
            let div=document.createElement("div");
            div.className="expense";
            div.innerHTML=`
                <div class="expense-info">
                    <h3>${expense.title}</h3>
                    <p>
                        ₹${expense.amount}
                        |
                        ${expense.category}
                        |
                        ${expense.date}
                    </p>
                </div>
                <div class="action">
                    <button class="edit-btn" onclick="editExpense(${expense.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
                </div>
            `;
            expenseList.appendChild(div);
        });
        totalElement.textContent=total;
}
// Delete expense
function deleteExpense(id){
    expenses=expenses.filter(function(expense){
        return expense.id !== id;
    });
    saveExpenses();
    displayExpenses();
}
// Edit expenses
function editExpense(id){
    let expense=expenses.find(function(expense){
        return expense.id===id;
    });
    if(!expense){
        return;
    }
    titleInput.value=expense.title;
    amountInput.value=expense.amount;
    categoryInput.value=expense.category;
    dateInput.value=expense.date;
    // remove old expenses
    expenses=expenses.filter(function(item){
        return item.id!==id;
    });
    saveExpenses();
    displayExpenses();
}
// clear all expenses
clearBtn.addEventListener('click',function(){
    const confirmation=confirm("Are you sure you want to delete all expenses?");
    if(confirmation){
        expenses=[];
        saveExpenses();
        displayExpenses();
    }
})
displayExpenses();