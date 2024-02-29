let expenses = [];
function addExpense() {
  let desc = document.getElementById('desc').value;
  let amt = document.getElementById('amt').value;
expenses.push({
    desc: desc,
    amt: amt
});
localStorage.setItem('expenses', JSON.stringify(expenses));
  showExpenses();
}

function showExpenses() {
let expenseTable = document.getElementById('expenses');
expenseTable.innerHTML = '';
for(let i = 0; i < expenses.length; i++) {
    let row = `<tr>
                  <td>${expenses[i].desc}</td>  
                  <td>${expenses[i].amt}</td>
                  <td><button onclick="deleteExpense(${i})">Delete</button></td>   
               </tr>`;

    expenseTable.innerHTML += row;
  }

}

function deleteExpense(i) {
  expenses.splice(i, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  showExpenses();  
}

document.addEventListener('DOMContentLoaded', () => {

  if(localStorage.getItem('expenses')) {
    expenses = JSON.parse(localStorage.getItem('expenses'));
    showExpenses();
  }

});