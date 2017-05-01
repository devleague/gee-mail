# GeeMail 

GeeMail is a coding exercise meant to simulate an e-mail web application inbox.

## Description

With this coding challenge you will be creating a simulation of a little known current e-mail web application you may or may not have heard of.

We have created a basic mail generator script for you that will load a handful of pre-populated messages when your application loads and you will be requried to consume that data and build out UI elements to display that data along with populating new messages and some other basic functionality.

## Pre-Requisites
You will need the following tools to complete this challenge

* A personal GitHub account
* [Sublime Text 3 ](http://www.sublimetext.com/3)
* [Git](https://help.github.com/articles/set-up-git#platform-all)

## Objectives

1. Fork this repository to your own GitHub profile and clone to your local machine.
 * [How to Fork A Repository](https://help.github.com/articles/fork-a-repo/)

2. Create a basic page layout via HTML/CSS with a top header section with the name of the application and a content section where you will display the messages.

3. When your page loads, via JavaScript access our prepopulated data stored in the `window.geemails` variable. Each object in the array has the following properties:
	* date - The date message was sent
	* subject - The subject of the message
	* sender - The sender of the message
	* body - The GeeMail message content

4. With this data you must make a visual list of mail messages on the page with the following minimum requirements.
	* Each message should have it's own row showing:
		* Date
		* Sender
		* Subject
	* When clicking on a message you must provide some method of showing the message for that row.

5. You must show an inbox count somewhere on the page to show the current number of messages in your inbox.

6. Set a recurring function to via the JavaScript `setInterval` function that will call our existing `getNewMessage` function that we have created for you that will return a newly created message with the same properties as your previous messages.

6. All CSS styles should be created in the `css\style.css` file included in the project. 

7. All JavaScript should be created in the `<head>` element in your included `index.html` file inside of the window.onload function already created in the `<head>` section.

8. Commit your code often and when you are completed send us a pull request from your repository so that we may review your code.

Bonus: You may add any images or any extra functionality that you wish to your application and use any other JavaScript frameworks if you like.

## Most Importanly....Have Fun!
