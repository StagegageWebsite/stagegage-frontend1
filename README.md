# stagegage-frontend

FRONTEND DEVELOPMENT REQUIREMENTS:

Looking for a frontend developer familiar with Node.js, REACT, less, and jest. Developer must be able to work quickly and iteratively with the product manager.

The Stageage front-end is a client side application built on node.js and REACT/less with a build process in webpack to compile ecma6 to ecma5 using babel.

The frontend is broken out into two different folders. There is stagegage-frontend and stagegage-frontend1. stagegage-frontend was my first attempt at putting this frontend together -- I didn't have a good sense of how to organize the project, but all of the main parts are there. stagegage-frontend1 has a much better base. It's just a matter of copying components from stagegage-frontend over into stagegage-frontend1.

stagegage-frontend1 QUICK start
1. cd into the stagegage-frontend1 directory and run ```webpack -w```
2. In a new terminal window, run ```node server.js``` from the same directory
3. Navigate to http://localhost:3000/. Here you will see a Facebook login button.
4. The login button should allow you to log in and out of Facebook.

How the folders are organized:

1. The __tests__ folder is set up with jest, such that running ```npm test``` runs the tests.
2. The client folder contains components. This is where all REACT components are housed. The less files for each component are to be included in each component directory, and simply have to be required at the top of the file.
3. client/components/app.js is where the REACT components are appended to the DOM through the id 'app'
4. webpack.config.js uses this same app.js as the entry point
5. The public folder contains the javascript compiled by webpack, along with the index.html file.
6. In index.html, the facebook SDK is included in script tags. Refer to the facebook javascript SDK script to see how the SDK app id works.

Next Steps:

1. Build out the Home component with a navigation bar at the top. I used react-router in stategage-frontend, which you can use for reference. react-router has a new version which I found kind of confusing, so you might want to stick with the older version.
2. Most of the mockups can be implemented with basic REACT components. I recommend implementing the flux model in order to store artists/festivals, as exists in stagegage-frontend. egghead.io has a great tutorial on flux, if you need help learning it.
3. Much of the dragging and dropping of artists of performances into their slot rankings can be achieved through the REACT drag and drop module: https://gaearon.github.io/react-dnd/docs-tutorial.html
4. Need to build out the user model, whereby a user logs in with their Facebook information, their details are stored in the session and information about them can be recalled with their user id
5. Create a color scheme template with Kyle
6. mixpanel.....:)
