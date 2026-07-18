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
        // If it's a section wrapper that has bg-bg-ivory
        if (lines[i].includes('section') && lines[i].includes('bg-bg-ivory')) {
          const original = lines[i];
          // We can replace bg-bg-ivory with a semi-transparent version if we want, or just remove it.
          // Let's replace it with 'bg-transparent' to be safe.
          lines[i] = lines[i].replace(/\bbg-bg-ivory\b/g, 'bg-transparent');
          
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
