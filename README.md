# Coding Quiz Challenge

## Overview
This challenge was to to practice javascript concepts and reinforce html and css basics by creating an interactive quiz from scratch. The acceptance criteria did not require a specific topic for the quiz but did require particular functionality in the form of buttons, timers, and functions.

## Project Description
This challenge project included the folowing Acceptance Criteria:

GIVEN I am taking a code quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and my score

## Run and Install
The deployed coding quiz can be accessed [here](https://kristensantee.github.io/coding-quiz-challenge/). A screenshot of the site is shown below.

![](./assets/Screenshot%20Quiz.png)

## How to Use the Project
This quiz was assigned to push the limits and abilities of a developing coder who is new to javascript. As such, there are some limitations to the functionality and design as I did not use more advanced APIs or tools that may have made the project quicker or more responsive than a scratch-built project. The Acceptance Criteria requires that the user is able to save initials and score but not that they be displayed anywhere necessarily. As such, I utilized localStorage for now with the understanding that since the parameters are set, I could get the stored key data in the future as the project is developed in the future. 

When the quiz is initiated with the Start button, the first question and list of answer options appears. The user can select any option but if they are not correct with their click, the quiz will move to the next question and simultaneously deduct 10 seconds from the timer. 

## How to Contribute to the Project
This project was created to further expand on introductory javascript training and is open to review and collaboration to improve and simplify the code.