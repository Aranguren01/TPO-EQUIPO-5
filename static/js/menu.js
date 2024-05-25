window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.nav-links .dropdown-content');
    header.classList.toggle('shadowdrop', window.scrollY > 0);
});

// document.addEventListener('DOMContentLoaded', function () {
//     const nav = document.querySelector('nav');
//     const dropdown = document.querySelector('.dropdown');

//     dropdown.addEventListener('mouseenter', function () {
//         nav.classList.add('nav-expanded');
//     });

//     dropdown.addEventListener('mouseleave', function () {
//         nav.classList.remove('nav-expanded');
//     });
// });
// esta funcion comprueba si un elemento esta visible en pantalla
function isVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// cuando se carga la página...
window.addEventListener('DOMContentLoaded', (ev0) => {
        // asignamos un evento scroll...
	window.addEventListener('scroll', (ev1) => {
                // y a todos los elementos con la clase paused...
		document.querySelectorAll(".paused").forEach(elm => {
			if (isVisible(elm)) // que sean visibles...
				elm.classList.remove("paused"); // les quitamos la clase paused
		})
	});
});