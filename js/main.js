const closeBtn = document.querySelectorAll('.nav-link');
const collapse = document.getElementById('navbarNavDropdown');
// console.log(collapse);
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', function () {
    // console.log('piu');
    collapse.classList.remove('show');
  });
}
