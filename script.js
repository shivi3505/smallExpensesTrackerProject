document.addEventListener("DOMContentLoaded",initialize);
function initialize(){
  expenseList=JSON.parse(localStorage.getItem("expense"))||[];
  expenseList.forEach((expense)=>displayExpense(expense))
}
function submitForm(event){
  event.preventDefault();
  let expenseamount = document.getElementById("expenseamount").value;
  let expensetype = document.getElementById("expensetype").value;
  let description = document.getElementById("description").value;
  console.log(expenseamount,expensetype,description);
  const expense = {
    expenseamount,
    expensetype,
     description
  }
 
  
 const expenselist=JSON.parse(localStorage.getItem("expense")) || [];
  console.log(expenselist)
  const editId = localStorage.getItem("editId");
  if(editId)
  {
    updateExpense(expense,expenselist,editId)
  }
  else{
    addExpense(expense,expenselist);
  }
 // expenselist.push(expense);
  localStorage.setItem("expense",JSON.stringify(expenselist));
  //displayExpense(expense);
}
function addExpense(expense,expenselist){
   expense.id=Date.now();
  expenselist.push(expense);
  
  displayExpense(expense);
}
function displayExpense(expense){
  const expenseList = document.getElementById("expenseList");
  const listItem = document.createElement("li");
  listItem.textContent=expense.expenseamount+" - "+expense.expensetype+" - "+expense.description;
  listItem.id=expense.id;
  expenseList.appendChild(listItem);
  //console.log(expenseList);
  const deleteButton = document.createElement("button");
  deleteButton.textContent="Delete expenses";
  deleteButton.className="btn btn-success me-2"
  deleteButton.onclick=()=>{
    deleteExpense(expense.id,listItem);
  }
  listItem.appendChild(deleteButton)
  const editButton = document.createElement("button");
  editButton.textContent="Edit expenses";
  editButton.className=" btn btn-success "
  editButton.onclick=()=>{
    editExpense(expense);
  }
  listItem.appendChild(editButton)
  
 }
function deleteExpense(id,listItem){
  const expenselist = JSON.parse(localStorage.getItem("expense")) || []
  const updatedExpense = expenselist.filter(expense=>expense.id!==id);
  localStorage.setItem("expense",JSON.stringify(updatedExpense));
  listItem.remove();
  
}
function editExpense(expense){
  document.getElementById("expenseamount").value=expense.expenseamount;
  document.getElementById("expensetype").value=expense.expensetype;
  document.getElementById("description").value=expense.description;
  localStorage.setItem("editId",expense.id)
  const updateButton = document.querySelector("button[type=submit]");
  updateButton.textContent="Update Expense";
  
}
function updateExpense(expense,expenselist,editId){
  for(let i=0;i<expenselist.length;i++){
    if(expenselist[i].id==editId){
      expenselist[i].expenseamount=expense.expenseamount;
      expenselist[i].expensetype=expense.expensetype;
      expenselist[i].description=expense.description;
      
    }
   }
   const li=document.getElementById(editId);
    li.textContent=expense.expenseamount+" - "+expense.expensetype+" - "+expense.description;
    localStorage.removeItem("editId");
    const deleteButton=document.createElement("button")
    deleteButton.textContent="delete Expenses"
    deleteButton.className="btn btn-success sm me-2"
    const editButton=document.createElement("button")
    editButton.textContent="edit Expenses"
    editButton.className="btn btn-success sm"
    li.appendChild(deleteButton)
    li.appendChild(editButton)
    // const submitButton = document.querySelector("button[type='submit']");
    // submitButton.textContent="Add Expense";
}