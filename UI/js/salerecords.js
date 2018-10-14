window.onload = () => {
  /* View items functionality */
  document.getElementById('view-modal-button').addEventListener('click', () => {
    document.querySelector('.view-modal').style.display = 'flex';
  });
  document.querySelector('.view-modal-close').addEventListener('click', () => {
    document.querySelector('.view-modal').style.display = 'none';
  });
};
