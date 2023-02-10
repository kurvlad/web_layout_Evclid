window.addEventListener('DOMContentLoaded', function () {
  const btnUp = document.getElementById('btn-up');

  console.log(window.pageYOffset);
  window.addEventListener('scroll', scrollPage, true);
  function scrollPage() {
    if (window.pageYOffset > 100) {
      btnUp.style.visibility = "visible";
    } else {
      btnUp.style.visibility = "hidden";
    }
  }
  btnUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })
})
