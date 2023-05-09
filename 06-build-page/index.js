const fs = require('fs');
const path = require('path');

let folderPath = path.join(__dirname, 'project-dist');
let bundleStylesPath = path.join(folderPath, 'style.css');
let stylesPath = path.join(__dirname, 'styles');

fs.mkdir(folderPath, 
{ recursive: true }, err => {
    if(err) throw err;
});

fs.writeFile(bundleStylesPath,
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
                    const output = fs.createWriteStream(bundleStylesPath, {flags: 'a'});
                    input.on('data', chunk => output.write(chunk + '\n'));
                    input.on('error', error => console.log('Error', error.message));
                }
            });
        }
    });