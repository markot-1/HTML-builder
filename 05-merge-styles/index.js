const fs = require('fs');
const path = require('path');

let bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');
let stylesPath = path.join(__dirname, 'styles');


fs.writeFile(bundlePath,
    ' ',
    (err) => {
        if (err) throw err;
    }
);

fs.readdir(stylesPath,
    (err, files) => {
        if (err)
            console.log(err);
        else {
            files.forEach(file => {
                if(fs.statSync(stylesPath + '/' + file).isFile() && path.extname(stylesPath + '/' + file) === '.css') {
                    const input = fs.createReadStream(stylesPath + '/' + file, 'utf-8');
                    const output = fs.createWriteStream(bundlePath, {flags: 'a'});
                    input.on('data', chunk => output.write(chunk));
                    input.on('error', error => console.log('Error', error.message));
                }
            });
        }
    });