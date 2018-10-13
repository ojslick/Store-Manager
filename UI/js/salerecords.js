window.onload = () => {
  /*View items functionality*/
  document.getElementById('view-modal-button').addEventListener('click', function() {
    document.querySelector('.view-modal').style.display = 'flex';
  });
  document.querySelector('.view-modal-close').addEventListener('click', function() {
    document.querySelector('.view-modal').style.display = 'none';
  });
}
