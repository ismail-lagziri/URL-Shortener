const express = require('express');
const shortid = require('shortid');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const filePath = path.join(__dirname, 'urls.json');

let urls = {};
fs.readFile(filePath, 'utf8', (err, data) => {
  if (!err && data) {
    urls = JSON.parse(data);
  }
});

app.post('/shorten', (req, res) => {
  const { url } = req.body;
  const existingShortId = Object.keys(urls).find(key => urls[key] === url);

  if (existingShortId) {
    res.json({ shortUrl: `https://url-shortener-avcf.onrender.com/${existingShortId}` });
  } else {
    const shortId = shortid.generate();
    urls[shortId] = url;

    fs.writeFile(filePath, JSON.stringify(urls), 'utf8', (err) => {
      if (err) {
        console.error('Failed to save URLs:', err);
        res.status(500).json({ error: 'Failed to save URLs' });
      } else {
        res.json({ shortUrl: `https://url-shortener-avcf.onrender.com/${shortId}` });
      }
    });
  }
});

app.get('/:shortId', (req, res) => {
  const { shortId } = req.params;
  const url = urls[shortId];
  if (url) {
    res.redirect(url);
  } else {
    res.status(404).json({ error: 'URL not found' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
