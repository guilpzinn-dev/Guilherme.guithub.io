const pages = document.querySelectorAll('.page');
const buttons = document.querySelectorAll('.next-btn');

let currentPage = 0;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // remove página atual
    pages[currentPage].classList.remove('active');

    // avança
    currentPage++;

    // ativa próxima página
    if (pages[currentPage]) {
      pages[currentPage].classList.add('active');
    }

    // esconde botão na última página
    if (currentPage === pages.length - 1) {
      btn.style.display = 'none';
    }
  });
});
