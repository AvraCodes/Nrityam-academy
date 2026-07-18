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
        if (lines[i].includes('font-serif')) {
          const original = lines[i];
          lines[i] = lines[i]
            .replace(/leading-\[[^\]]+\]/g, 'leading-relaxed')
            .replace(/\bleading-none\b/g, 'leading-relaxed')
            .replace(/\bleading-tight\b/g, 'leading-relaxed')
            .replace(/\bleading-snug\b/g, 'leading-relaxed')
            .replace(/\bleading-normal\b/g, 'leading-relaxed');
            
          // If no leading class exists, add leading-relaxed
          if (!lines[i].includes('leading-') && lines[i].includes('text-')) {
             lines[i] = lines[i].replace(/font-serif/, 'font-serif leading-relaxed');
          }
          
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
