const moveFile = require('move-file');
const os = require('os');
const fs = require('fs');

const userDrive = os.homedir();
const userDesktop = `${userDrive}\\desktop`;

const gitconfig = '.gitconfig';
const bowerconfig = '.bowerrc';
const npmconfig = '.npmrc';

const configFiles = [
    gitconfig,
    bowerconfig,
    npmconfig
];

module.exports = () => {
    console.log('-----------------------');
    console.log('Moving config files...');
    configFiles.forEach(f => {
        fs.stat(`${userDrive}\\${f}`, (err) => {
            let sourceFile = err ? `${userDesktop}\\${f}` : `${userDrive}\\${f}`;
            let destinationFile = err ? `${userDrive}\\${f}` : `${userDesktop}\\${f}`;
            
            (async () => {
                await moveFile(sourceFile, destinationFile);
                console.log('-- ' + sourceFile + ' moved to ' + destinationFile);
            })();
        })
    });
}