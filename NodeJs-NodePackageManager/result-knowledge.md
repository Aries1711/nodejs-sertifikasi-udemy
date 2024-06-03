### NPM COMMAND

#### Production dependencies

just use `npm install` or `npm install --production`

#### Development dependencies

use `npm install packagename --save-dev` or `npm install --production` to avoid installed this dependencies on production

### NPM MAKE LIBRARY

- first make folder and call `npm init` fill the command-prompt input then dont forget to add `"type": "module"` or package.json generated
- after that just make function and call the class function or make comment documentation on how to use the function
- after making the function and done with the class, then do command `npm adduser` to show up prompt to login on [registry.npmjs.org](https://registry.npmjs.org)
- fill the prompt about your account credential username and password, and email for one time password verification authenticator.
- after success on sign in process then now we can publish the package by call command `npm publish` _note the package name must be unique at global publishment on website npmjs.com_
- on upgrade the library dont forget to change the semantic version of the package on package.json file `"version": "1.0.0"` must be plus +1 based on your change.
- for ignoring file that you dont want to publish it on npmjs.com you can setup the ignore file like .gitignore on git file push to repo by using .npmignore (eg: env configuration) example : [npmignore](learn-make-library/.npmignore)
- on case you upgrade the npm library dont forget to update the library by using command `npm update`
