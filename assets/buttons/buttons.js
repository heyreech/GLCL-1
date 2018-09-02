let fn = function (){
	let minus = document.getElementsByClassName('minus');

	for (let i = 0; i < minus.length; i++){
		let e = document.createElement('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
		}

	let plus = document.getElementsByClassName('plus');

	for (let i = 0; i < plus.length; i++){
		let e = document.createElement('p');
		e.innerHTML = '+';
		plus[i].appendChild(e);
		}
};

document.addEventListener('DOMContentLoaded', fn, false);
