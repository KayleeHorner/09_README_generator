function generateTemplate(data) {
    return `
    # ${data.title}

    $ ${data.description}

    ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)


    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}


    ## License
    This project is licensed under the ${data.license} license.

    ## Contributing
    ${data.contribution}

    ## Tests
    ${data.test}

    ## Questions
    If you have any questions, you can find me on Github under at http://github.com/${data.github}. Still have questions? You can email me at: ${data.email}
`}