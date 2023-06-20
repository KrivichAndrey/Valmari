document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.mobile-menu-open');
  const menu = document.querySelector('.mobile-menu');
  const menuBody = document.querySelector('.mobile-menu__body');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const { body } = document;

  function openMenu() {
    menu.classList.add('active'); 
    menuBody.classList.add('active');
    body.classList.add('lock');
  }

  function closeMenu() {
    menu.classList.remove('active');
    menuBody.classList.remove('active');
    body.classList.remove('lock');
  }

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      openMenu();
    });

    menu.addEventListener('click', (e) => {
      const { target } = e;
      console.log(target);

      if (target === closeBtn || target === menu) {
        closeMenu();
      }
    });
  }
});
