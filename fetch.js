const fs = require('fs');
fetch('https://dhanenthira.vercel.app/')
  .then(r => r.text())
  .then(t => {
    const s = t.indexOf('<section id="skills">');
    const e = t.indexOf('</section>', s);
    fs.writeFileSync('live_skills.html', t.substring(s, e + 10));
  });
