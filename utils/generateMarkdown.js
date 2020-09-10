function generateMarkdown(data, githubInfo) {
	return `
# **${data.title}**

![GitHub license](https://img.shields.io/badge/Made%20by-%40${data.username}-green)

## Description 

${data.description}

# Technologies Used

![GitHub top language](https://img.shields.io/github/languages/top/${data.username}/${data.reponame}?color=green&logo=github&logoColor=green)
![GitHub language count](https://img.shields.io/github/languages/count/${data.username}/${data.reponame}?color=green&logo=github&logoColor=green)

## Table of contents

- [Installation](#installation)
- [Instructions](#instructions)
- [Features](#features)
- [Example Gif](#example-gif)
- [Repository Link](#Repository)
- [Test](#Test)
- [Licence](#Licence)
- [GitHub Info](#GitHub)

## Installation

${data.installation}

## Instructions

${data.usage}

## Features

${data.features}

## Example Gif

<img src="${data.gif}" width="500" />

## Repository

![GitHub repo size](https://img.shields.io/github/repo-size/${data.username}/${data.reponame}?logo=github)

![GitHub Commit Activity](https://img.shields.io/github/commit-activity/m/${data.username}/${data.reponame})
![GitHub Last Commit](https://img.shields.io/github/last-commit/${data.username}/${data.reponame})


![GitHubopen pull request](https://img.shields.io/github/issues-pr/${data.username}/${data.reponame})
![GitHub closed pull request](https://img.shields.io/github/issues-pr-closed/${data.username}/${data.reponame})

![GitHub Stars](https://img.shields.io/github/stars/${data.username}/${data.reponame}?style=social)

- [Project Repo](https://github.com/${data.username}/${data.reponame})

## Contributors

${data.contributing}

![GitHub contributors](https://img.shields.io/github/contributors/${data.username}/${data.reponame})
![GitHub Forks](https://img.shields.io/github/forks/${data.username}/${data.reponame}?label=Fork)
![GitHub Watchers](https://img.shields.io/github/watchers/${data.username}/${data.reponame}?label=Watch)

## Test

![GitHub test](https://img.shields.io/badge/test-100%25-success)

![GitHub open issues](https://img.shields.io/github/issues/${data.username}/${data.reponame})
![GitHub closed issues](https://img.shields.io/github/issues-closed/${data.username}/${data.reponame})

## Licence

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## GitHub

<img src="${githubInfo.githubImage}" width="250" />

- ${data.name}
- [GitHub Profile](https://github.com/${data.username})
- <${data.email}>
- ![GitHub Followers](https://img.shields.io/github/followers/${data.username}?label=Follow)

`;
}

module.exports = generateMarkdown;
