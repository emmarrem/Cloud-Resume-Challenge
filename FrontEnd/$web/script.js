// Page View Counter Logic
const functionUrl = 'https://getcounterfromcosmos.azurewebsites.net/api/GetCounterFromCosmos?code=_nDKAdDUwHCU-VieuOzX8J0j6Sqt-JejQRST9qkQ5KnHAzFuWg1heg==';

window.addEventListener('DOMContentLoaded', (event) => {
  fetch(functionUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('counter').textContent = data.count;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      document.getElementById('counter').textContent = 'Unavailable';
    });
});

// Theme Switcher Logic
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const themeModeText = document.getElementById('theme-mode-text');
  themeModeText.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

document.addEventListener('DOMContentLoaded', toggleDarkMode);