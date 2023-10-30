// JavaScript Document
document.querySelector('.form').addEventListener('submit', (event) =>{
	event.preventDefault();

	const name = document.querySelector('#name').value;
	const birthday = document.querySelector('#birthday').value;
	const mail = document.querySelector('#mail').value;
	const city = document.querySelector('#city').value;
	const select = document.querySelector('#pets').value;
	const yard = document.querySelector('input[name="yard"]:checked').value;

	window.location.href = 'thankyou.html';
} );