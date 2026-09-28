// Get html elements
let totalIncome=document.getElementById('totalIncome');
let totalExpense=document.getElementById('totalExpense');
let balance=document.getElementById('balance');
let foodTotal=document.getElementById('foodTotal');
let travelTotal=document.getElementById('travelTotal');
let shoppingTotal=document.getElementById('shoppingTotal');
let transactionList=document.getElementById('transactionList');
let transactionCount=document.getElementById('transactionCount');
// Transactions data
let transactions=[
    {
        title:"Monthly Salary",
        amount:35000,
        type:"income",
        category:"Salary"
    },
    {
        title:"Grocery Shopping",
        amount:2500,
        type:"expense",
        category:"Food"
    },
    {
        title:"Bus Pass",
        amount:1200,
        type:"expense",
        category:"Travel"
    },
    {
        title:"Restaurant",
        amount:800,
        type:"expense",
        category:"Food"
    },
    {
        title:"New Shoes",
        amount:2200,
        type:"expense",
        category:"Shopping"
    },
    {
        title:"Cab",
        amount:600,
        type:"expense",
        category:"Travel"
    }
];
// calculate total income
let incomeTransactions=transactions.filter(function(transaction){
    return transaction.type==="income";
});
let income=incomeTransactions.reduce(function(sum,transaction){
    return sum+transaction.amount;
},0)
// calculate total expense
let expenseTransaction=transactions.filter(function(transaction){
    return transaction.type==="expense";
});
let expense=expenseTransaction.reduce(function(sum,transaction){
    return sum+transaction.amount;
},0);
// calculate balance
let remainingBalance=income-expense;
// category total function
function calculateCategoryTotal(category){
    let categoryTransaction=transactions.filter(function(transaction){
        return (
            transaction.type==="expense" && 
            transaction.category===category
        );
    });
    let totalCategory=categoryTransaction.reduce(function(sum,transaction){
        return sum+transaction.amount;
    },0);
    return totalCategory;
}
// category total
let food=calculateCategoryTotal("Food");
let travel=calculateCategoryTotal("Travel");
let shopping=calculateCategoryTotal("Shopping");
// Display Summary
totalIncome.textContent="₹"+income.toLocaleString("en-IN");
totalExpense.textContent="₹"+expense.toLocaleString("en-IN");
balance.textContent="₹"+remainingBalance.toLocaleString("en-IN");
// display category 
foodTotal.textContent="₹"+food.toLocaleString("en-IN");
travelTotal.textContent="₹"+travel.toLocaleString("en-IN");
shoppingTotal.textContent="₹"+shopping.toLocaleString("en-IN");
// display transaction count
transactionCount.textContent=transactions.length+(transactions.length===1?"Transaction":"Transactions");
// display transaction
transactions.forEach(function(transaction){
    let transactionItem=document.createElement("div");
    transactionItem.className="transaction-item";
    icon="fa-solid fa-money-check-dollar";
    if(transaction.type==="income"){
        icon="fa-solid fa-sack-dollar";
    }
    else if(transaction.category==="Food"){
        icon="fa-solid fa-burger";
    }
    else if(transaction.category==="Travel"){
        icon="fa-solid fa-car-side";
    }
    else if(transaction.category==="Shopping"){
        icon="fa-solid fa-gifts";
    }
    let amountClass=transaction.type==="income"?"income-amount":"expense-amount";
    let sign=transaction.type==="income"?"+":"-";
    transactionItem.innerHTML=`
    <div class="transaction-left">
        <div class="transaction-icon">
            <i class="${icon}"></i>
        </div>
        <div class="transaction-info">
            <h3>${transaction.title}</h3>
            <p>${transaction.category}</p>
        </div>
    </div>
    <div class="transaction-amount ${amountClass}">
        ${sign} ₹${transaction.amount.toLocaleString("en-IN")}
    </div>
    `;
    transactionList.appendChild(transactionItem);
});