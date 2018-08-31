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
    configFiles.forEach(f => {
        fs.stat(`${userDrive}\\${f}`, (err, stats) => {
            if (err) {
                (async () => {
                    await moveFile(`${userDesktop}\\${f}`, `${userDrive}\\${f}`);
                })();
            } else {
                (async () => {
                    await moveFile(`${userDrive}\\${f}`, `${userDesktop}\\${f}`);
                })();
            }
        })
    });
    console.log('Config files moved');
}