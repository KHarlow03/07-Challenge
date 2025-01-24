// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if (license === "Apache 2.0") {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    if (license === "GPL 3.0") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    if (license === "BSD 3") {
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    return "";
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return `[MIT](https://opensource.org/licenses/MIT)`
    }
    if (license === "Apache 2.0") {
      return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
    }
    if (license === "GPL 3.0") {
      return `[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)`
    }
    if (license === "BSD 3") {
      return `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`
    }
    return "";
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license) {
      return `## License
      This project is licensed under the ${license} license.`;
    }
    return "";
  }
  
  // TODO: Create a function to generate markdown for README
    function generateMarkdown(data) {
    return `# ${data.title}
  
    ${renderLicenseBadge(data.license)}
  
    ## Description
    ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    ${renderLicenseLink(data.license)}
    - [Questions](#questions)
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ${renderLicenseSection(data.license)}
  
    ## Questions
    If you have any additonal questions, you can contact me at:
    - GitHub [${data.github}](https://github.com/${data.github})
    - Email [${data.email}](mailto:${data.email})
  `;
  }
  
  export default generateMarkdown;
  