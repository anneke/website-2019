// if (window.location.toString().includes("localhost")) {
// 	document.getElementById('html').className = "dev-env";
// } else if (window.location.toString().includes("works")) {
// 	document.getElementById('html').className = "acc-env";
// } else {
// 	document.getElementById('html').className = "prod-env";
// }

const onButton = document.querySelector('.navigation__ontoggle');
const offButton = document.querySelector('.navigation__offtoggle');
const mainContainer = document.querySelectorAll('html, body');
const navContainer = document.querySelector('.site-navigation');
const menu = document.querySelector('.mobile__navigation');
const headerContainer = document.querySelector('.site-header');
const headerTitle = document.querySelector('.site-header__title');
const firstItem = document.querySelector('.navigation__list li:first-of-type a');

const pageClickables = document.querySelectorAll(
	'a, input, ' +
	'select, textarea,  ' +
	'button, *[tabindex] '
);

const menuClickables = menu.querySelectorAll(
	'a, button, *[tabindex] '
);

function toggleMenu() {
	menu.classList.add('is-active');
	onButton.setAttribute('hidden', true);
	onButton.style.display = 'none'; 
	navContainer.style.display = 'block'; 
	for (e = 0; e < mainContainer.length; ++e) {
		mainContainer[e].style.height = (headerContainer.offsetHeight + headerTitle.offsetHeight) + 'px';
		mainContainer[e].style.overflow = 'hidden';
		mainContainer[e].style.position = 'relative';
	}
	firstItem.focus();
	
	for(var i=0; i < pageClickables.length; i++){
		pageClickables[i].setAttribute('tabindex', -1);
	}
	for(var i=0; i < menuClickables.length; i++){
		menuClickables[i].setAttribute('tabindex', 0);
	}
}; 

function toggleMenuOff() {
	menu.classList.remove('is-active');
	onButton.setAttribute('hidden', false);
	onButton.style.display = 'flex';
	navContainer.style.display = 'flex'; 
	for (e = 0; e < mainContainer.length; ++e) {
		mainContainer[e].removeAttribute('style');
	}

	for(var i=0; i < pageClickables.length; i++){
		pageClickables[i].removeAttribute('tabindex');
	}
}; 

onButton.addEventListener('click', toggleMenu);
offButton.addEventListener('click', toggleMenuOff);
 