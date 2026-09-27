const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const downloads22Dir = 'c:/Users/User/Downloads/22/22';
const hdDir = path.join(__dirname, '..', 'public', 'images', 'course thumbnail', 'new update', 'hd');
const targetDir = path.join(__dirname, '..', 'public', 'images', 'course thumbnail');

async function processFile(srcPath, baseName) {
  const destWebp = path.join(targetDir, baseName + '.webp');
  const destJpg = path.join(targetDir, baseName + '.jpg');

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
  console.log(`${baseName}: ${(origSize/1024).toFixed(0)}KB -> WebP: ${(webpSize/1024).toFixed(0)}KB`);
}

async function main() {
  console.log('--- Copying and Optimizing New Downloaded Thumbnails ---');
  if (fs.existsSync(downloads22Dir)) {
    const files = fs.readdirSync(downloads22Dir);
    for (const f of files) {
      if (/\.(jpg|jpeg|png)$/i.test(f)) {
        const src = path.join(downloads22Dir, f);
        const destInHd = path.join(hdDir, f);
        fs.copyFileSync(src, destInHd);

        const base = path.parse(f).name;
        await processFile(src, base);

        // Also create clean URL-safe alias for SAP
        if (base.includes('SAP')) {
          await processFile(src, 'sap enterprise fico abap sd mm');
          await processFile(src, 'sap-fico-abap-sd-mm');
        }
        // Alias for prince project management spelling
        if (base.includes('prince')) {
          await processFile(src, 'prince project management');
        }
        // Alias for itil
        if (base.includes('itil')) {
          await processFile(src, 'itil 4 foundation service management');
        }
      }
    }
  }

  console.log('\n--- Re-running optimization on all HD files in new update/hd ---');
  const hdFiles = fs.readdirSync(hdDir);
  for (const f of hdFiles) {
    if (/\.(jpg|jpeg|png)$/i.test(f)) {
      const src = path.join(hdDir, f);
      const base = path.parse(f).name;
      await processFile(src, base);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
