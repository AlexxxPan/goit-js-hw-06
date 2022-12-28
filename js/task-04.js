let counterValue = 0

const displayCounter = document.querySelector('#value')
const decreaseBtn = document.querySelector('button[data-action="decrement"]')
const increaseBtn = document.querySelector('button[data-action="increment"]')

decreaseBtn.addEventListener('click', () => {
	counterValue -= 1; 
	displayCounter.textContent = counterValue;
});

increaseBtn.addEventListener('click', () => {
	counterValue += 1;
	displayCounter.textContent = counterValue;
});