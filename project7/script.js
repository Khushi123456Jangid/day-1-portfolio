    function analyzeExpense(){
        let name=document.getElementById('name').value;
        let income=Number(document.getElementById('income').value);
        let expenses=Number(document.getElementById('expenses').value);
        let result= document.getElementById('result');
        // enter valid value
        if(name === "" || income<=0 || expenses<0){
            result.innerText="Please enter valid information."
        }
        // calculate value
        let balance = income - expenses;
        // calculate percentage
        let savingPersentage= (balance/income)*100;
        // initialize status
        let status;
        // anaylze spending
        if(balance < 0){
            status="You are spending more than your income";
        }
        else if(savingPersentage<10 && savingPersentage>0){
            status="You are saving very low";
        } 
        else if(savingPersentage<30 && savingPersentage>=10){
            status="your savings are okay";
        }
        else {
            status="Excellent! You are saving well.";
        }
        // display result
        result.innerHTML = `
            <h3>Hello, ${name}</h3>
            <p>Income : ${income.toLocaleString()}</p>
            <p>Expenses : ${expenses.toLocaleString()}</p>
            <p>Balance : ${balance.toLocaleString()}</p>
            <p>Saving : ${savingPersentage.toFixed(1)}%</p>
            <p><strong>${status}</strong></p>
        `;
    }