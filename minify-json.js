const fs = require('fs');
const path = require('path');
const jsmin = require('jsmin').jsmin;

const directoryPath = './';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory", err);
    return;
  }

  // 파일 리스트 처리
  files.forEach(file => {
    if (path.extname(file) === '.json') {
      const filePath = path.join(directoryPath, file);
      const originalJson = fs.readFileSync(filePath, 'utf8');
      const minifiedJson = jsmin(originalJson);

      const minifiedPath = path.join(directoryPath, `minified-${file}`);
      fs.writeFileSync(minifiedPath, minifiedJson, 'utf8');
      console.log(`Minified file written: ${minifiedPath}`);
    }
  });
});