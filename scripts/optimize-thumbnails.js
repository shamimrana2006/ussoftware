const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'images', 'course thumbnail');
const hdDir = path.join(baseDir, 'new update', 'hd');
const newUpdateDir = path.join(baseDir, 'new update');

async function processFile(srcPath, destDir, baseName) {
  const destWebp = path.join(destDir, baseName + '.webp');
  const destJpg = path.join(destDir, baseName + '.jpg');

  await sharp(srcPath)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(destWebp);

  await sharp(srcPath)
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(destJpg);

  const origSize = fs.statSync(srcPath).size;
  const webpSize = fs.statSync(destWebp).size;
  const jpgSize = fs.statSync(destJpg).size;

  console.log(
    baseName + ': ' +
    (origSize / 1024).toFixed(0) + 'KB -> WebP: ' +
    (webpSize / 1024).toFixed(0) + 'KB, JPG: ' +
    (jpgSize / 1024).toFixed(0) + 'KB'
  );
}

async function main() {
  console.log('--- Optimizing HD Thumbnails ---');
  const hdFiles = fs.readdirSync(hdDir);
  for (const file of hdFiles) {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      const srcPath = path.join(hdDir, file);
      const baseName = path.parse(file).name;
      // Save directly to public/images/course thumbnail/
      await processFile(srcPath, baseDir, baseName);
    }
  }

  console.log('\n--- Optimizing New Update Root Thumbnails ---');
  const nuFiles = fs.readdirSync(newUpdateDir);
  for (const file of nuFiles) {
    const srcPath = path.join(newUpdateDir, file);
    if (fs.statSync(srcPath).isFile() && (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg'))) {
      const baseName = path.parse(file).name.trim();
      await processFile(srcPath, baseDir, baseName);
    }
  }

  console.log('\n--- Optimizing Existing Course Thumbnails ---');
  const existingFiles = fs.readdirSync(baseDir);
  for (const file of existingFiles) {
    const srcPath = path.join(baseDir, file);
    if (fs.statSync(srcPath).isFile() && (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg'))) {
      const baseName = path.parse(file).name;
      // Also generate webp and optimized jpg
      const destWebp = path.join(baseDir, baseName + '.webp');
      try {
        await sharp(srcPath)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 82, effort: 6 })
          .toFile(destWebp);
        const origSize = fs.statSync(srcPath).size;
        const webpSize = fs.statSync(destWebp).size;
        console.log('[Existing] ' + baseName + ': ' + (origSize / 1024).toFixed(0) + 'KB -> WebP: ' + (webpSize / 1024).toFixed(0) + 'KB');
      } catch (err) {
        console.error('Error optimizing ' + file + ':', err.message);
      }
    }
  }
  console.log('\nAll images successfully optimized!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
