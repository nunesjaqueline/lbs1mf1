// JavaScript Document

const button = document.querySelector('.submit-btn');
const thankYou = document.querySelector('.thankYou');

button.addEventListener('click', () => {
	thankYou.classList.toggle('hidden');
});