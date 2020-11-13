# Getting Started
This project was created with `create-react-app`. Clone the repo and run `npm install` via the terminal. Although projects with `create-react-app` have out of the box support for React Testing Library, testing will be covered in [Part 3](https://github.com/christopher-hague/real-fizz-buzz-3) due to the time constraint as described in the guidelines. Please see that repo for instructions related to testing. The app can be started with `npm start`. Look to the code in `src/fizzBuzz` to see how Real FizzBuzz was implemented.

# Overview
The directions in Real FizzBuzz - Part 2 are almost identical as the directions in [Part 1](https://github.com/christopher-hague/real-fizz-buzz-1) except that we are now asked to identify 'lucky' numbers in addition to the other criteria. Given that, what we render will now adhere to the following criteria:
- ‘fizz’ for numbers that are multiples of 3
- ‘buzz’ for numbers that are multiples of 5
- ‘fizzbuzz’ for numbers that are multiples of 15
- 'lucky' for numbers that contain a 3
- numbers that are none of the above should render as the  number itself

The app has been given a default range from 1-20 but is equipped to generate a new set of data for user input. Try it for yourself!