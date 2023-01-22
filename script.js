function gatePin() {
	const pin = Math.round(Math.random() * 10000);
	const pinString = pin + '';
	if (pinString.length == 4) {
		return pin;
	} else {
		console.log('got 3 digit and calling again', pin);
		return gatePin();
	}
};

function generatePin() {
	const pin = gatePin();
	document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event) {
	const number = event.target.innerText;
	const calcInput = document.getElementById('typed-numbers');
	if (isNaN(number)) {
		// if(number == 'c'){
		//     calcInput.value = '';
		// }
	} else {
		calcInput.value += number;
		// const previousNumber = calcInput.value;
		// const newNumber = previousNumber + number;
		// calcInput.value = newNumber;
	}
});

function clearMe() {
	const calcInput = document.getElementById('typed-numbers');
	calcInput.value = '';
};

function veriFypin() {
	const pin = document.getElementById('display-pin').value;
	const typedNumbers = document.getElementById('typed-numbers').value;
	const successMessage = document.getElementById('notify-success');
	const failError = document.getElementById('notify-fail');
	if (pin == typedNumbers) {
		successMessage.style.display = 'block';
		failError.style.display = 'none';
	} else {
		successMessage.style.display = 'none';
		failError.style.display = 'block';
	}
}