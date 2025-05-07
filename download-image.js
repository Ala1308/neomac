const https = require('https');
const fs = require('fs');

// URL of a free-to-use image of a roofer working on a roof
const imageUrl = 'https://images.unsplash.com/photo-1632759145351-1d170f2a9ddd?q=80&w=2070&auto=format&fit=crop';
const localPath = './public/toiture-worker.jpg';

console.log('Downloading image from Unsplash...');

https.get(imageUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`);
    return;
  }

  const fileStream = fs.createWriteStream(localPath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log(`Image downloaded successfully to ${localPath}`);
  });
}).on('error', (e) => {
  console.error(`Error downloading image: ${e.message}`);
});
