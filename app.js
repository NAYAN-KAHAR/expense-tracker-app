

let budgetInput = document.querySelector('#bidget');
let budgetBtn = document.querySelector('#set-Budget');

let expenseName = document.querySelector('#expense-name');
let expenseCost = document.querySelector('#expense-cost');
let amountBtn = document.querySelector('#check-Amount');

let ulTag = document.querySelector('#all-data')

const setBudget = () => {
	if(budgetInput.value){
		document.querySelector('#total-budget').innerHTML = budgetInput.value
	   document.querySelector('#balance').innerHTML = budgetInput.value
	   budgetInput.value = '';
	}else{
		Swal.fire({
  		title: 'Error!',
  		text: 'Please Enter Total Amount',
  		icon: 'error',
  		confirmButtonText: 'Done'
		})
  }
}


// check Amount button logi
let resultRow = document.querySelector('#result-row');
let count = 0;
const setAmount = () => {
	if(expenseCost.value && expenseName.value){

		resultRow.style.display = "block";	
	let expense = document.querySelector('#expense');
	let li = document.createElement('li')
	let p = document.createElement('p')
	li.innerHTML = expenseName.value;
	p.innerHTML = expenseCost.value;
	count += Number(expenseCost.value);
	expense.innerHTML = count;  
    document.querySelector('#balance').innerHTML -= expenseCost.value; 
    let delLogo = document.createElement('a')
    delLogo.innerHTML = `<img onclick="deleteLogo(event)" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyS7u2yRxXcCbxMkItPTizZYN0mdUnMZla2A&s'>`;
	li.appendChild(p)
	li.appendChild(delLogo)
	ulTag.appendChild(li);

	expenseName.value = "";
	expenseCost.value = "";

	}else{
		Swal.fire({
  		title: 'Error!',
  		text: 'Please Enter Expense or Cost Of Product ',
  		icon: 'error',
  		confirmButtonText: 'Done'
		})
	}
	
}

budgetBtn.addEventListener('click', setBudget);
amountBtn.addEventListener('click', setAmount);

const deleteLogo = (e) => {
	console.log('delBtn',e.target.parentElement.parentElement);
	e.target.parentElement.parentElement.remove();
	console.log("ulTag.childElement:", ulTag.childElement)
}