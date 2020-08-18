const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generate = require("./utils/generateMarkdown");

const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	{
		type: "input",
		name: "badge",
		message: "What badge links do you want",
	},
	{
		type: "input",
		name: "description",
		message: "Describe your project.",
	},
	{
		type: "input",
		name: "installation",
		message: "Please provide the installation instructions",
	},
	{
		type: "input",
		name: "usage",
		message: "What's the project's usage",
	},
	{
		type: "input",
		name: "licence",
		message: "Do you have a project licence or your badge link",
	},
	{
		type: "input",
		name: "contributing",
		message: "Are there any other contributing parties",
	},
	{
		type: "input",
		name: "test",
		message: "What were the project tests?",
	},
	{
		type: "input",
		name: "username",
		message: "What is your github user name?",
	},
	{
		type: "input",
		name: "repo",
		message: "What is the link to the repo?",
	},
];

inquirer.prompt(questions).then(function (data) {
	const queryUrl = `https://api.github.com/users/${data.username}`;

	axios.get(queryUrl).then(function (res) {
		const githubInfo = {
			githubImage: res.data.avatar_url,
			email: res.data.email,
			profile: res.data.html_url,
			name: res.data.name,
		};

		fs.writeFile("README.md", generate(data, githubInfo), function (err) {
			if (err) {
				throw err;
			}

			console.log("New README file created with success!");
		});
	});
});

function init() {}

init();
