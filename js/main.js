
window.onload = () => {
  /*Sign In Functionality*/
document.getElementsByClassName('login')[0].addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.getElementsByClassName('login')[1].addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});

/*Sign Up Modal Functionality */
document.getElementsByClassName('register')[0].addEventListener('click', function() {
  document.querySelector('.bg-modal-1').style.display = 'flex';
});

document.getElementsByClassName('register')[1].addEventListener('click', function() {
  document.querySelector('.bg-modal-1').style.display = 'flex';
});

document.querySelector('.close-1').addEventListener('click', function() {
  document.querySelector('.bg-modal-1').style.display = 'none';
});
}
