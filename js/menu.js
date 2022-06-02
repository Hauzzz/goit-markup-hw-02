/*/(() => {
  const refs = {
    openMenuBtn: document.querySelector("[menu]"),
    closeMenuBtn: document.querySelector("[mob-menubtn]"),
    modal: document.querySelector("[mob-menu]"),
    body: document.querySelector("body")
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll")
  }
})();

/*//*/
(() => { const mobileMenu = document.querySelector('.menu');
 const openMenuBtn = document.querySelector('.mob-menubtn');
 const closeMenuBtn = document.querySelector('.mob-menu'); 
 const toggleMenu = () => { const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false; 
 openMenuBtn.setAttribute('body', !isMenuOpen);
  mobileMenu.classList.toggle('is-open'); const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll'; bodyScrollLock[scrollLockMethod](document.body); }; openMenuBtn.addEventListener('click', toggleMenu);
 closeMenuBtn.addEventListener('click', toggleMenu); 
 window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (!e.matches) return; mobileMenu.classList.remove('is-open'); 
 openMenuBtn.setAttribute('aria-expanded', false); bodyScrollLock.enableBodyScroll(document.body); }); })();
 /*/


 (() => {
	const mobileMenu = document.querySelector('.mob-menu');
	const openMenuBtn = document.querySelector('.menu');
	const closeMenuBtn = document.querySelector('.mob-menubtn');

	const toggleMenu = () => {
		const isMenuOpen =
			openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		mobileMenu.classList.toggle('is-open');

		const scrollLockMethod = !isMenuOpen
			? 'disableBodyScroll'
			: 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);

	// Закрываем мобильное меню на более широких экранах
	// в случае изменения ориентации устройства.
	window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
		if (!e.matches) return;
		mobileMenu.classList.remove('is-open');
		openMenuBtn.setAttribute('aria-expanded', false);
		bodyScrollLock.enableBodyScroll(document.body);
	});
})();