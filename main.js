/*Login Modal Functionality */
document.getElementById('login').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});

/*Sign Up Modal Functionality */
document.getElementById('sign-up').addEventListener('click', function() {
  document.querySelector('.bg-modal-1').style.display = 'flex';
});

document.querySelector('.close-1').addEventListener('click', function() {
  document.querySelector('.bg-modal-1').style.display = 'none';
});

let check = () => {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('signup-btn').disabled = 'false';
  } else {
    document.getElementById('signup-btn').disabled = 'true';
  }
}

function myFunction() {
  const nav = document.getElementsById("mytop-nav");
  console.log('nav.className')
  if (nav.className === "top-nav") {
      nav.className += "responsive";
  } else {
      nav.className = "top-nav";
  }
}