const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'secret-folder');

fs.readdir(filePath,
    (err, files) => {
        console.log("\nCurrent directory files:");
        if (err)
            console.log(err);
        else {
            files.forEach(file => {
                if(fs.statSync(filePath + '/' + file).isFile()) {
                    console.log(`${file.toString().split('.')[0]} - ${path.extname(filePath + '/' + file).toString().split('.')[1]} - ${fs.statSync(filePath + '/' + file).size} bytes`);
                }
            });
        }
    });