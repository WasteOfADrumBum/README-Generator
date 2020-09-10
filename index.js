const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generate = require("./utils/generateMarkdown");

const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "README.md");

const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	{
		type: "input",
		name: "description",
		message: "Describe your project.",
	},
	{
		type: "input",
		name: "installation",
		message: "Please provide the installation instructions.",
	},
	{
		type: "input",
		name: "usage",
		message: "Please provide the opperation instructions?",
	},
	{
		type: "input",
		name: "features",
		message: "Please provide the features of your application.",
	},
	{
		type: "input",
		name: "gif",
		message: "What's the URL or reletive path for your example image?",
	},
	{
		type: "input",
		name: "contributing",
		message: "Are there any other contributing parties?",
	},
	{
		type: "input",
		name: "username",
		message: "What is your github user name?",
	},
	{
		type: "input",
		name: "name",
		message: "What is your name?",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email?",
	},
	{
		type: "input",
		name: "reponame",
		message:
			"What is the link to the repo?\ni.e. https://github.com/[user_name]/[repo_link]",
	},
];

inquirer.prompt(questions).then(function (data) {
	const queryUrl = `https://api.github.com/users/${data.username}`;

	axios.get(queryUrl).then(function (res) {
		const githubInfo = {
			githubImage: res.data.avatar_url,
		};

		fs.writeFile(outputPath, generate(data, githubInfo), function (err) {
			if (err) {
				throw err;
			}

			console.log("New README file created with success!");
		});
	});
});

function init() {}

init();
