// script.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  if (name) {
    localStorage.setItem('internName', name);
    window.location.href = 'dashboard.html';
  }
});
