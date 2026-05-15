const fs = require('fs');
const path = 'C:/Users/Startklar/.gemini/antigravity/brain/6ea9e02d-d7f8-4a11-b3f7-2d4de06b9ee7/.system_generated/logs/overview.txt';
const lines = fs.readFileSync(path, 'utf8').split('\n');

let fullMsg = '';
for (const line of lines) {
    if (line.includes('You are working on my SvelteKit travel app project inside the folder:')) {
        const obj = JSON.parse(line);
        if (obj.content) fullMsg = obj.content;
    }
}

fs.writeFileSync('prompt.txt', fullMsg.replace(/\\n/g, '\n').replace(/\\r/g, '\r'));
console.log('done');
