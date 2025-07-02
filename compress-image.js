const sharp = require('sharp');
const path = require('path');

const inputImage = 'public/images/digital marketing services.JPG';
const outputImage = 'public/images/digital marketing services compressed.jpg';

sharp(inputImage)
  .resize(1920, 1080) // Set resolution to 1920x1080
  .jpeg({ quality: 80 }) // Compress with 80% quality
  .toFile(outputImage)
  .then(() => {
    console.log('Image compressed successfully');
  })
  .catch((err) => {
    console.error('Error compressing image:', err);
  }); 