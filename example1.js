const octokit = require('@octokit/rest')();
// Authentication using username and password
const simpleGit = require('simple-git')();
// Shelljs package for running shell tasks optional
//const shellJs = require('shelljs');
// Simple Git with Promise for handling success and failure
const simpleGitPromise = require('simple-git/promise')();
  octokit.authenticate({
    type: 'basic',
    username: 'ganga2494',
    password: 'Karanam@2494'
});
// Variables for Repo name and description
var description = "repo creation using git api";
var name = "test-reo-2";
//Create a Repository online via Github Api
/*const createGitHubRepo =  octokit.repos.create(
   {'myrepo', repoDescription}
);*/
//shellJs.cd('path/to/repo/folder');
// Repo name
const repo = 'dummy';  //Repo name
// User name and password of your GitHub
const userName = 'ganga2494';
const password = 'Karanam@2494';
// Set up GitHub url like this so no manual entry of user pass needed
const gitHubUrl = `https://github.com/${userName}/H1B-PROJECT`;
console.log(gitHubUrl)
// add local git config like username and email
simpleGit.addConfig('user.email','ganga2494@gmail.com');
simpleGit.addConfig('user.name','gangadhar');
// Add remore repo url as origin to repo
//simpleGitPromise.addRemote('origin',gitHubUrl);
// Add all files for commit
console.log(simpleGitPromise.add('.'),"vv")
  simpleGitPromise.add('.')
    .then(
       (addSuccess) => {
          console.log(addSuccess);
       }, (failedAdd) => {
          console.log('adding files failed');
    });
// Commit files as Initial Commit
 simpleGitPromise.commit('Intial commit by simplegit')
   .then(
      (successCommit) => {
        console.log(successCommit);
     }, (failed) => {
        console.log('failed commmit');
 });
// Finally push to online repository
 simpleGitPromise.push('origin','master')
    .then((success) => {
       console.log('repo successfully pushed');
    },(failed)=> {
       console.log('repo push failed');
 });