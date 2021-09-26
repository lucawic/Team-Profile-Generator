# Team-Profile-Generator

## Overview 
the goal(or in this case MVP would work) of this project was to generate a webpage that displays the members of a working team with necessary information like their emails/phone numbers/Githubs etc. This was to be done through command line prompts, from which an HTML page would be generated.

### technologies
This project used:
Node 14.17.4
inquirer.js 8.1.2
Jest 27.0.6
uuid 8.3.2

### Installation
npm init - to initialize node and create packaged json file
npm i inquirer
npm i jest

### Instructions
Type node index.js in the terminal to initialize command prompts.

### User Story/description of Project
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles


GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

### Demo Video

https://drive.google.com/file/d/1xOG2s5NerQr8DddHAfnuC5jVWSTxaqjJ/view (first attempt)
    (revisited and completed the module 10 challenge after Project 2)
