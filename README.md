# Strength Gap

![Strength Gap's main menu as seen on a desktop computer](sg-frontend/src/images/sg-github.JPG?raw=true "Strength Gap")

## Table of Content
- [What is Strength Gap](#what-is-strength-gap)
- [Installing Strength Gap](#installing-strength-gap)
- [Running Strength Gap](#running-strength-gap)
- [What Went Right](#what-went-right)
- [What Needs Improving](#what-needs-improving)
- [Contributions](#contributions)
- [License](#license)

## What is Strength Gap

*A project made with the MERN stack (MongoDB, Express, React, Node.js) with a healthy dose of Redux and Jest.*

Gyms can be intimidating, especially for newcomers. Strength Gap is my attempt at alleviating one concern: *What should I do there?*

It allows you to select any exercise and see which muscle group they primarily target, and then combine those exercises to check for potential gaps in your exercise routine.

It comes complete with a registration feature to save, edit, and delete your workouts.

**Check the [live demo](https://www.patrice-hermenault.com).**

## Installing Strength Gap

All you will need to proceed is git and the latest version of node.js.

First, initialize a git project and clone this repository:

    git init
    git clone https://github.com/FlyingMandarine/strengthgap-react

Then, install all dependencies using npm:

    npm install

If you only want to check out the front-end bit of the app, that's all you need to do, and you can skip to the 'Executing program' section.

If you'd like to be able to log in, register, save or delete your workouts, you will need to:

1. Connect a MongoDB database. The easiest way to do that is to create a (free) cluster on https://cloud.mongodb.com, and then click *Connect* on your cluster, followed by *Connect your application*, and you'll be shown your connection string. You'll need it for the next step.

2. Create a file in the sg-backend folder which you'll simply call '.env' and which will contain your environment variables. Inside of it, put the following:

```
MONGODB_URI=***INSERT YOUR CONNECTION STRING HERE, REPLACING 'myFirstDatabase' WITH 'sg-api'***

TEST_MONGODB_URI=***SAME AS ABOVE, BUT REPLACE 'myFirstDatabase' WITH 'sg-api-test'***

PORT=3001

SECRET=SG-TEST-PASSWORD
```

And you should be ready to go.

## Running Strength Gap

1. If you'd like to run the app with all back-end functionality, open a terminal window, go into sg-backend and start the server:

```
npm run dev
```

2. To run the front-end, open another terminal window (keep the previous one running!), go into sg-frontend and simply run:

```
npm start
```

And that should do it!

## What Went Right

This section will contain a short explanation of what tricky parts of the project I've managed to tackle. Check back again soon!

## What Needs Improving

This section will contain a to-do list of features yet to implement, with a few snippets of code which I believe could be improved. Check back again soon!

## Contributions

All code by me, Patrice Hermenault. Any bugs, questions or suggestions, feel free to reach me at hermenaultpatrice@gmail.com.

Design by Martina Brillante.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
