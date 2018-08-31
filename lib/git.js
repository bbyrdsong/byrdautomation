const util = require('util');
const exec = util.promisify(require('child_process').exec);
const request = require('request-promise');

export const github = {
    token: '2a0745aa4646bd05cac63c1c1af821f93a517ed2',
    getUser: function () {
        return request({
            "method": "GET",
            "uri": 'https://api.github.com/user',
            "json": true,
            "headers": {
                "Authorization": `Bearer ${github.token}`,
                "User-Agent": "byrd-cli"
            }
        });
    },
    getRepos: function () {
        return request({
            "method": "GET",
            "uri": 'https://api.github.com/users/bbyrdsong/repos',
            "json": true,
            "headers": {
                "Authorization": `Bearer ${github.token}`,
                "User-Agent": "byrd-cli"
            }
        });
    },
    clone: function (projectName) {
        async () => {
            console.log(`Cloning ${projectName}, please wait...`);
            const {
                stdout,
                stderr
            } = await exec(`git clone https://github.com/bbyrdsong/${projectName}`);
            if (stderr) {
                console.log(stderr);
            } else {
                console.log(stdout);
            }
        }
    }
};

function main() {
    return github.getRepos();
}

main().then(function (result) {
    console.log(result.map(o => o.name));
}).catch(function (err) {
    console.log(err.message);
});

// module.exports = (projectName) => {
//     (async () => {
//         console.log(`Cloning ${projectName}, please wait...`);
//         const { stdout, stderr } = await exec(`git clone https://github.com/bbyrdsong/${projectName}`);
//         if (stderr) {
//             console.log(stderr);
//         } else {
//             console.log(stdout);
//         }
//     })();
// }