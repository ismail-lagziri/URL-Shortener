document.getElementById('shorten-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const urlInput = document.getElementById('url-input');
  const resultDiv = document.getElementById('result');

  const url = urlInput.value;
  const response = await fetch('/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  if (response.ok) {
    const data = await response.json();
    resultDiv.innerHTML = `<a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
  } else {
    resultDiv.textContent = 'Error: Failed to shorten the URL';
  }
});