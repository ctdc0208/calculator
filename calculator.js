
function add (num1, num2) {
	let res = num1 + num2
	return res
}

function subtract (num1, num2) {
	let res = num1 - num2
	return res
}

function sum (...nums) {
	let res = nums.reduce((num1, num2) => num1 + num2)
	return res
}

function multiply (...nums) {
	let res = nums.reduce((num1, num2) => num1 * num2)
	return res
}

function power() {

}

function factorial() {

}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
