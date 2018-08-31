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
        fs.stat(`${userDrive}\\${f}`, (err, stats) => {
            if (err) {
                (async () => {
                    let movedTo = 'user folder';
                    await moveFile(`${userDesktop}\\${f}`, `${userDrive}\\${f}`);
                    console.log('-- ' + f + ' moved to ' + movedTo);
                })();
            } else {
                (async () => {
                    let movedTo = 'desktop'
                    await moveFile(`${userDrive}\\${f}`, `${userDesktop}\\${f}`);
                    console.log('-- ' + f + ' moved to ' + movedTo);
                })();
            }
        })
    });
}