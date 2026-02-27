const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../frames');
const outputDir = path.join(__dirname, 'public/frames-optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.webp') || f.endsWith('.png')).sort();
const optimizedFiles = [];

async function optimizeImages() {
  console.log(`Found ${files.length} frames. Optimizing to WebP...`);
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(inputDir, file);
    const outputFileName = `frame_${String(i).padStart(4, '0')}.webp`;
    const outputPath = path.join(outputDir, outputFileName);
    
    await sharp(inputPath)
      .resize({ width: 1920 }) // Ensure uniform max width, responsive for most displays
      .webp({ quality: 100, lossless: true }) // Maximum quality to solve "poor quality" feedback
      .toFile(outputPath);
      
    optimizedFiles.push(outputFileName);
    
    if (i % 20 === 0) console.log(`Processed ${i}/${files.length}`);
  }
  
  // Create the new references JSON
  fs.writeFileSync(
    path.join(__dirname, 'public/frames-optimized.json'),
    JSON.stringify(optimizedFiles)
  );
  
  console.log('Finished optimizing all frames!');
}

optimizeImages().catch(console.error);
