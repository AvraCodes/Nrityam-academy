const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        // Find <section> tags and remove border-t, border-b, and border colors
        if (lines[i].includes('<section')) {
          const original = lines[i];
          lines[i] = lines[i]
            .replace(/\bborder-t\b/g, '')
            .replace(/\bborder-b\b/g, '')
            .replace(/\bborder-primary\/10\b/g, '')
            .replace(/\bborder-text-light\/10\b/g, '')
            .replace(/\s{2,}/g, ' '); // Clean up extra spaces
            
          if (lines[i] !== original) {
            modified = true;
          }
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, lines.join('\n'));
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir('./components/sections');
