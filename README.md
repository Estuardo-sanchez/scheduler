# Interview Scheduler
Interview Scheduler is a single-page application that allows users to book technical interviews between students and mentors. A user can make, edit and delete an appointment.

The front end was built with React and makes requests to the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) server to fetch and store appointment data.

## Create appointment
![interview-schedular add app ](https://user-images.githubusercontent.com/93778202/184580780-7ca7c31c-b2b1-4707-81e7-c356e4ed524e.gif)

## Edit/Delete appointment
![interview-scheduler delete app](https://user-images.githubusercontent.com/93778202/184580834-8e8c1f9a-f8b2-43f0-a6f2-97d233516803.gif)

## Setup
  - Fork and clone this repo.
  - install dependencies with 'npm install'
  - Fork and clone the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api).
  - Follow steps in README to install and setup the database.
  - Open two seperate terminal windows for Scheduler-api & scheduler.
  - Run both servers with 'npm start'.

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Dependencies
  - axios
  - classnames
  - react
  - react-dom
  - react-scripts
  - normalize.css
