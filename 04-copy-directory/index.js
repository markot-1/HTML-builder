const fs = require('fs');
const path = require('path');

let originalDirPath = path.join(__dirname, 'files');
let newDirPath = path.join(__dirname, 'files-copy');

fs.mkdir(newDirPath, 
{ recursive: true }, err => {
    if(err) throw err;
});

fs.readdir(originalDirPath,
    (err, files) => {
        if (err)
            console.log(err);
        else {
            files.forEach(file => {
                fs.copyFile(originalDirPath + '/' + file, newDirPath + '/' + file, err => {
                    if(err) throw err; 
                 });
            });
        }
    });
