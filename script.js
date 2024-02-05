// NAVBAR SCROLL
window.addEventListener('scroll', function() {
	const nav = document.querySelector('nav');
	const fixedNav = nav.offsetTop;

	if (window.pageYOffset > fixedNav) {
		nav.classList.remove('absolute');
		nav.classList.add('nav-fixed');
		console.log('jalan');
	} else {
		nav.classList.add('absolute');
		nav.classList.remove('nav-fixed');
	}
})



// HAMBURGER
btnHamburger = document.getElementById('hamburger');
menuHamburger = document.querySelector('.hamburger-menu');

btnHamburger.addEventListener('click', function() {
	btnHamburger.classList.toggle('hamburger-active');
	menuHamburger.classList.toggle('hidden');
})

window.addEventListener('click', function(e) {
	if (e.target != menuHamburger && e.target != btnHamburger) {
		menuHamburger.classList.add('hidden');
		btnHamburger.classList.remove('hamburger-active');
	}
})
