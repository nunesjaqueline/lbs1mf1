// JavaScript Document
document.querySelector('.form').addEventListener('submit', (event) =>{
	event.preventDefault();

	const name = document.querySelector('#name').value;
	const mail = document.querySelector('#mail').value;

	window.location.href = 'thankyou.html';
} );