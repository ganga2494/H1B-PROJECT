const octokit = require('@octokit/rest')();
// Authentication using username and password
const simpleGit = require('simple-git')();
const shellJs = require('shelljs');
var express = require('express');
var fs = require('fs');
var app = express();
//var github = require('octonode');


var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sendMsg', function (req, res) {
	console.log(req.body, "req")
	const filename=req.body.filename
console.log(filename)
	fs.writeFile(filename, req.body.a, function (err) {
		if (err) throw err;
	});
	// Simple Git with Promise for handling success and failure
	const simpleGitPromise = require('simple-git/promise')();
	octokit.authenticate({
		type: 'basic',
		username: 'ganga2494',
		password: 'Karanam@2494'
	});

	var description = "repo creation using git api";
	const name = "test-reo-2";

 
	const userName = 'ganga2494';
	//const password = 'Karanam@2494';
	// Set up GitHub url like this so no manual entry of user pass needed
	const gitHubUrl = `https://github.com/${userName}/H1B-PROJECT`;
	console.log(gitHubUrl)
	// add local git config like username and email
	simpleGit.addConfig('user.email', 'ganga2494@gmail.com');
	simpleGit.addConfig('user.name', 'gangadhar');
	// Add remore repo url as origin to repo
	//simpleGitPromise.addRemote('origin3',gitHubUrl);
	// Add all files for commit
	simpleGitPromise.add('.')
		.then(
			(addSuccess) => {
				console.log(addSuccess);
			}, (failedAdd) => {
				console.log('adding files failed');
			});
	simpleGitPromise.pull('origin', 'master')
		.then(
			(successCommit) => {
				console.log(successCommit);
			}, (failed) => {
				console.log('failed commmit');
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
	simpleGitPromise.push('origin', 'master')
		.then((success) => {
			console.log('repo successfully pushed');
		}, (failed) => {
			console.log('repo push failed');
		});
	// module.exports = {
	// 	createRepo: createRepo,

	// };
})
app.listen(3001, function () {
	console.log('smart contracts')
})

  
  /*client.get('/user', {}, function (err, status, body, headers) {
	console.log(body); //json object
  });*/