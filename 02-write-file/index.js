const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

fs.writeFile(
    path.join(__dirname, 'newFile.txt'),
    ' ',
    (err) => {
        if (err) throw err;
    }
);

stdout.write('Enter your text below\n');
stdin.on('data', data => {
    const dataStringified = data.toString().trim();
    if(dataStringified === 'exit') {
        console.log('Good luck!');
        process.exit();
    }
    fs.appendFile(
        path.join(__dirname, 'newFile.txt'),
        `${dataStringified}\n`,
        err => {
            if (err) throw err;
        }
    );
});

process.on('SIGINT', () => {
    console.log('Good luck!');
    process.exit();
});