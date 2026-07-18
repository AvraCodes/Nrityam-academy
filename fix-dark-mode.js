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
      
      // We want to replace instances of "bg-white" with "bg-white dark:bg-white/5"
      // but only if it doesn't already have dark:bg-white
      
      let modified = false;
      
      // Simple regex: find bg-white followed by a boundary, negative lookahead for dark:bg-
      const newContent = content.replace(/\bbg-white\b(?!\/)(?!\s+dark:bg-)/g, 'bg-white dark:bg-white/5');
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
      
      const newContent2 = content.replace(/\bbg-white\/([0-9]+)\b(?!\s+dark:bg-)/g, 'bg-white/$1 dark:bg-white/5');
      if (newContent2 !== content) {
        content = newContent2;
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir('./components');
