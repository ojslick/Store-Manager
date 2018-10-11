window.onload = () => {
  /*View items functionality*/
  document.getElementById('view-modal-button').addEventListener('click', function() {
    document.querySelector('.view-modal').style.display = 'flex';
  });
  document.querySelector('.view-modal-close').addEventListener('click', function() {
    document.querySelector('.view-modal').style.display = 'none';
  });
  /*Create sales attendant profile functionality*/
  document.getElementById('create-profile').addEventListener('click', function() {
    document.querySelector('.view-modal-create-profile').style.display = 'flex';
  });
  document.querySelector('.view-modal-create-profile-close').addEventListener('click', function() {
    document.querySelector('.view-modal-create-profile').style.display = 'none';
  });
  /*Add product functionality*/
  document.getElementById('add-product').addEventListener('click', function() {
    document.querySelector('.view-modal-add-product ').style.display = 'flex';
  });
  document.querySelector('.view-modal-add-product-close').addEventListener('click', function() {
    document.querySelector('.view-modal-add-product').style.display = 'none';
  });
  /*View sales functionality*/
  document.getElementById('sales-records').addEventListener('click', function() {
    document.querySelector('.view-modal-sales-records').style.display = 'flex';
  });
  document.querySelector('.view-modal-sales-records-close').addEventListener('click', function() {
    document.querySelector('.view-modal-sales-records').style.display = 'none';
  });
}
