let expression = "";
let sign = "";
let expression_new = "";
let expectNewValue = false;
// 1 - add
// 2 - subtract 
// 3 - multiply
// 4 - divide
let operationNeeded = 0;

let caclulatorWindow = document.querySelector("#calculatorWindow");
let popupAlert = document.querySelector("#popupAlert");

function displayOnTheScreen(expression){
	caclulatorWindow.textContent = Math.round(expression*100)/100;
}

function press(num) {
	isNotDefined();

	if (expectNewValue) {
		expression_new += String(num);
		displayOnTheScreen(expression_new);
		return;
	}

	expression += num;
	displayOnTheScreen(expression);
}

function isNotDefined(){
	if(isNaN(expression)){
		expectNewValue = false;
		clearExpression();
	}
}

function add() {
	expectNewValue = true;
	operationNeeded = 1;
}

function subtract() {
	expectNewValue = true;
	operationNeeded = 2;
}

function multiply() {
	expectNewValue = true;
	operationNeeded = 3;
}

function divide() {
	expectNewValue = true;
	operationNeeded = 4;
}

function clearExpression() {
	expectNewValue = false;
	expression_new = "";
	expression = "";
	displayOnTheScreen(expression);
}

function equal() {
	switch (operationNeeded) {
		case 1:
			console.log(`add: ${expression} + ${expression_new} = ${+expression + +expression_new}`);
			expression = +expression + +expression_new;
			break;
		case 2:
			console.log(`subtract: ${expression} - ${expression_new} = ${+expression - +expression_new}`);
			expression = +expression - +expression_new;
			break;
		case 3:
			console.log(`multiply: ${expression} * ${expression_new} = ${+expression * +expression_new}`);
			expression = +expression * +expression_new;
			break;
		case 4:
			console.log(`divide: ${expression} / ${expression_new} = ${+expression / +expression_new}`);
			if(expression_new == 0){
				expression = NaN; 
				break;
			}
			expression = +expression / +expression_new;
			break;
		default:
			break;
	}

	displayOnTheScreen(expression);
	expression_new = "";
}

function notMadeYet() {
	popupAlert.style.opacity = "1";
	setTimeout(() => {
		popupAlert.style.opacity = "0";
	}, 2000);
	
}