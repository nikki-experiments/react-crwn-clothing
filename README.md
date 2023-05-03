# React Ecommerce Crwn Clothing

This project is bootstrapped with create-react-app. It is an ecommerce site with login, authentication, shopping cart, and connected to Stripe test portal.

## Steps to create

The following are the steps I took to plan and build this website.

- Create React App
- Add App.js, and components (static content)
- Add Sass
- Add Google Fonts
- Add Routing: react-router
- Create navigation bar using react-router
- Get routing to work for home and shop pages
- Style navigation
- Create a sign in component
- Install and setup Firebase DB
<!-- -
Firebase used for authentication so we can store and refer to users and sign in.
Can also use Google sign in.

Created by Google.
https://firebase.google.com/
It allows you to spin up and use database.

Steps: Create Firebase DB
Click go to console in upper right corner of Firebase website.
Click Create a project.
Name your db (my-project-db)
Hit continue
Say no to Google analytics. Click switch to turn off option.
Click Continue
In dashbaord click on Build dropdown.
We will be using Authentication and Firestore Database.

Steps: Bring Firebase into project
Add Firebase to your project using npm  npm install --save firebase

AUTHENTICATION OVERVIEW

A. Website (FE)
B. Firebase server hosting DB
C. Google server

1. A makes sign in request to C, sending over credentials (usernane, pass or email)
2. C will generate an auth_token and send it back to A in response.
3. A will send token to B so it can verify if A can access server data.
4. A will send auth_token to C to verify its valid.
5. C will send verification_token back to B if it confirms the auth_token OR will send back an error.
6. B will create an access_token and send back to A so it can make CRUD requests.
7. A will send request (CRUD + access_token) to B.
8. B will look at access_token to see what CRUD requests are allowed if any and send back a CRUD response.
9.

 -->
