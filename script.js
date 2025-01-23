document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const urlInput = document.getElementById('urlInput').value;
    const shortUrl = generateShortUrl(urlInput);
    displayShortUrl(shortUrl);
});

function generateShortUrl(url) {
    // Simple hash function to simulate URL shortening
    const hash = btoa(url).slice(0, 8);
    return `https://short.url/${hash}`;
}

function displayShortUrl(shortUrl) {
    const resultDiv = document.getElementById('result');
    const shortUrlAnchor = document.getElementById('shortUrl');
    shortUrlAnchor.href = shortUrl;
    shortUrlAnchor.textContent = shortUrl;
    resultDiv.classList.remove('hidden');
} 