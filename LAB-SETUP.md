# LAB SETUP CHECKLIST
##### INITIAL SETUP
- [ ] Update the local version of the class repo
  * git pull upstream master
- [ ] Setup the repo on git hub
- [ ] git clone repo to computer
##### GET THE FILES TO THE RIGHT PLACE
- [ ] Move generic lab setup files to lab repo
  * rsync -r ../lab-startup/ .
- [ ] Move any lab starter code from the class repo
  * rsync -r ../seattle-javascript-401d29/curriculum/class-XX/lab .
    * change the class number in the command as appropriate
##### INITIALIZE ANY DEPENDENCIES
- [ ] npm i jest eslint
- [ ] 
##### TEST SETUP
- [ ] create a "\__test__" folder
- [ ] create a test.test.js file
- [ ] copy and paste the following code
```
'use strict';

describe('sample test', () => {
  it('return true', () => {
    expect(true).toBe(true);
  });
});
```
- [ ] npm run test to verify jest is working
##### TEST LINT
- [ ] npm run lint
##### BRANCH THE REPO
- [ ] git checkout -b submission
- [ ] git checkout -b working
##### ACP
- [ ] ACP
##### TEST JSDOC
- [ ] liveserver from within docs folder (or heroku link)
##### README
- [ ] Update the Travis LInk
- [ ] Update the Github pull request link
- [ ] Update the backend link
- [ ] Update the front end link
- [ ] Add author name
- [ ] Add name of lab
- [ ] 
- [ ] 
- [ ] 
