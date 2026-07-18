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
        // Find <h2> tags that have text-text-main and replace with gradient
        if (lines[i].includes('<h2') && lines[i].includes('text-text-main')) {
          const original = lines[i];
          // Replace text-text-main with the gradient string
          lines[i] = lines[i].replace(
            /\btext-text-main\b/, 
            'text-transparent bg-clip-text bg-gradient-to-br from-text-main via-text-main/90 to-primary/80'
          );
          if (lines[i] !== original) {
            modified = true;
          }
        }
        
        // Also look for secondary headings like text-primary that might need a gradient
        if (lines[i].includes('<h2') && lines[i].includes('text-primary') && !lines[i].includes('bg-clip-text')) {
          const original = lines[i];
          lines[i] = lines[i].replace(
            /\btext-primary\b/, 
            'text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary'
          );
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
