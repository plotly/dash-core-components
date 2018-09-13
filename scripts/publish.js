#! /usr/bin/env node

const shell = require("shelljs");
const version = require('../package.json').version;
const name = require('../package.json').name;

try {
    console.log(`Publishing version ${version} of ${name} to NPM & PyPi\n`);

    shell.exec('npm run prepublish');

    console.log('>', 'python setup.py sdist');
    shell.exec('python setup.py sdist');

    // Publish to NPM
    console.log('>', 'npm publish');
    shell.exec('npm publish');

    // Publish to PyPi
    console.log('>', `twine upload dist/${name}-${version}.tar.gz`)
    shell.exec(`twine upload dist/${name}-${version}.tar.gz`);

    console.log('>', `git tag -a 'v${version}' -m 'v${version}'`)
    shell.exec(`git tag -a 'v${version}' -m 'v${version}'`);

    console.log('>', `git push origin master --follow-tags`)
    shell.exec(`git push origin master --follow-tags`)
} catch (error) {
    throw new Error(error);
}