import {
    Expense
} from './newExpense.js';



// Using AJAX for the fetch()
fetch('https://quotes.rest/qod?language=en')
    .then(result => result.json())
    .then(quoteInfo => {

        console.log(quoteInfo);

        let quoteObj = quoteInfo.contents.quotes;
        let quote = quoteObj[0].quote;
        document.getElementById('inspQuote').innerHTML = quote;

    });





document.getElementById('newExpenseBtn').addEventListener("click", addNewExpense);


let expensesList = [];
outputContent();


function addNewExpense() {


    let expenseDescription = document.getElementById('newExpenseDescription').value;
    let expenseAmount = document.getElementById('newExpenseAmount').value;

    if (expenseDescription === "" || expenseAmount === "") {
        alert("You have to enter a description and amount");
    };

    // Assign value to the new Expense class
    let expense1 = new Expense(expenseDescription, expenseAmount);

    // Push new value to the array
    expensesList.push(expense1);

    // Run function to write to local storage
    saveExpense();

    // Clear the input fields
    document.getElementById('newExpenseDescription').value = '';
    document.getElementById('newExpenseAmount').value = '';

    outputContent();
};

function outputContent() {

    if (localStorage.getItem("expensesList")) {
    expensesList = JSON.parse(localStorage.expensesList);


    document.getElementById('expensesList').innerHTML = '';

    let table = document.createElement('TABLE');

    let tr1 = document.createElement('tr');
    table.appendChild(tr1);

    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');

    let heading1 = 'Description';
    let heading2 = 'Amount';
    let heading3 = 'Delete';

    th1.textContent = heading1;
    th2.textContent = heading2;
    th3.textContent = heading3;

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);


    if (expensesList.length > 0) {
        expensesList.forEach(

            expense => {


                let tr2 = document.createElement('tr');
                table.appendChild(tr2);

                let td1 = document.createElement('td');
                td1.textContent = expense.Description;
                td1.setAttribute('id', expense.ID);

                tr2.appendChild(td1);



                let td2 = document.createElement('td');

                td2.textContent = expense.Amount;

                tr2.appendChild(td2);



                let td3 = document.createElement('td');

                let button = document.createElement('button');
                button.setAttribute('id', expense.ID);
                button.textContent = '\u00D7';
                button.addEventListener('click', deleteExpense);


                td3.appendChild(button);

                tr2.appendChild(td3);




                document.getElementById('expensesList').appendChild(table);

                //let expenseID = expense.ID;
                //document.getElementById(expenseID).addEventListener('click', deleteExpense);
            }

        )

    }

    document.getElementById('totalAmount').innerHTML = '';

    let div = document.createElement('div');
    div.setAttribute("id", "totalAmountWrapper");
    let p = document.createElement('p');
    p.textContent = 'TOTAL :';
    div.appendChild(p);
    document.getElementById('totalAmount').appendChild(div);

    let div2 = document.createElement('div');
    let p2 = document.createElement('p');
    p2.setAttribute("id", "amountTotalValue");
    let amount = calculateTotal();
    p2.textContent = `$${amount}`;
    //console.log(amount);
    div.appendChild(p2);
    document.getElementById('totalAmount').appendChild(div2);
    }

}


function calculateTotal() {

    let expenses = JSON.parse(localStorage.expensesList);
    let amountTotal = 0;

    for (let i = 0; i < expenses.length; i++) {

        let amount = parseFloat(expenses[i].Amount);


        amountTotal += amount;


        //console.log(amountTotal);
    }


    return amountTotal;
}



function saveExpense() {

    // Write array to local storage. The list tied to localStorage is just the name it names it in Local Storage when it creates it
    localStorage.expensesList = JSON.stringify(expensesList);
}





function deleteExpense(e) {
    let id = e.target.id;


    expensesList = JSON.parse(localStorage.expensesList);

    let index = expensesList.findIndex(exp => exp.ID == id);
    //console.log(expense);
    expensesList.splice(index, 1);

    saveExpense();
    outputContent();


};