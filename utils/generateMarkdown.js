function generateMarkdown(data, githubInfo) {
	return `
# **${data.title}**

${data.badge}

## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Repository Link](#Repository)
- [Contributors](#Contributors)
- [Test](#Test)
- [Licence](#Licence)
- [GitHub Info](#GitHub) 


## Installation

${data.installation}

## Usage

${data.usage}

## Repository

- [Project Repo](${data.repo})

## Contributors

${data.contributing}

## Test

${data.test}

## Licence

${data.licence}

## GitHub

![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>

`;
}

module.exports = generateMarkdown;
