import fs from 'fs';
const m = await import(process.argv[2]);
const p = fs.readFileSync(process.argv[3],'utf8');
const used=[...new Set([...p.matchAll(/\$t\('surMesure\.([a-zA-Z0-9]+)'\)/g)].map(x=>x[1]))];
const have=Object.keys(m.default.surMesure);
console.log('manquantes :', used.filter(k=>!have.includes(k)).join(', ')||'aucune');
