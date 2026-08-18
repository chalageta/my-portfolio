const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /bg-white/g, to: 'bg-[#0a0a0a]' },
  { from: /bg-gray-50/g, to: 'bg-[#0f0f0f]' },
  { from: /bg-gray-100/g, to: 'bg-[#1a1a1a]' },
  { from: /bg-gray-200/g, to: 'bg-[#262626]' },
  { from: /border-gray-50/g, to: 'border-[#141414]' },
  { from: /border-gray-100/g, to: 'border-[#1f1f1f]' },
  { from: /border-gray-200/g, to: 'border-[#27272a]' },
  { from: /text-gray-400/g, to: 'text-[#71717a]' },
  { from: /text-gray-500/g, to: 'text-[#a1a1aa]' },
  { from: /text-gray-600/g, to: 'text-[#a1a1aa]' },
  { from: /text-gray-700/g, to: 'text-[#d4d4d8]' },
  { from: /text-gray-800/g, to: 'text-[#e4e4e7]' },
  { from: /text-gray-900/g, to: 'text-[#f4f4f5]' },
  { from: /bg-gray-800/g, to: 'bg-[#1f1f1f]' },
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src/components'));

files.forEach(file => {
  if (file.includes('Hero.tsx') || file.includes('Navbar.tsx')) return; // Already updated

  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
