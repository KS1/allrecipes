## Project 2 - Chef Recipe Web Application

## Description

### Design Concept :

Everyone can be a Chef and save their yummy recipes in a place with a beautiful tiles presentation! Besides that, you may find more ideas here to create a New recipe!

### Why Chef Recipe?

Do you always have some pain-points like this?

- I cook everyday, I don’t even know what should I cook today?
- Why those recipes look so hard and complicated to follow up?
- Want to save my yummy recipes somewhere and go back to check if I forget.

### Our Plan is…

- Build an easy, simple, tasty recipe book for housewives and someone who needs to cook at home almost everyday like a Chef
- Provide a place to save those scrumptious, family recipes for those Chef Amateurs and share recipes with others.

### Design Process:

- Research : reference some market recipes websites, like allrecipes, simple recipes, food network, etc.
- Plan and Design : plan what we can do and design the layout (html/css)
- Build and Create : coding time!
- Test : we test and code together.
- Improve : there are still some unfinshed functions...

## User Story

```md
AS A user I WANT to see some yummy recipes with a brief description SO THAT I can have an idea about what I can cook today

As A user I WANT to see a recipe button on a recipe card SO THAT I can quickly click it to enter a whole recipe

AS A user I WANT to login recipe website SO THAT I can use some functions on the website

AS A user I WANT to add a recipe and save on the website SO THAT I can check my recipes whenever I want

AS A user I WANT to see my recipes showed on the homepage of recipe website SO THAT I can share my recipes with others
```

## Acceptance Criteria

```md
GIVEN a homepage presented with several cards
WHEN I click one of cards' recipe button
THEN I am able to enter that card's recipe
THEN it shows a recipe page

GIVEN a login button on the navbar and I don't have an account
WHEN I click it
THEN it pops up a login form with login and sign-up button
THEN I click the sign-up button
THEN it shows me the sign-up page
WHEN I complete the form and click submit
THEN it shows me the account page and the login button on the navbar shows log out button  
WHEN I click log out
THEN I log out

GIVEN I have an account
WHEN I click log in button on the navbar
THEN it shows me the account page

GIVEN an add button on the navbar and I haven't logged in
WHEN I click the add button
THEN it pops up the login form
THEN I login and it shows me the account page

GIVEN I have logged in
WHEN I click the add button on the navbar
THEN it shows me the add recipe form

GIVEN I have added a recipe in a recipe form
WHEN I click submit button
THEN it shows me the account page with a recipe card and a recipe button
WHEN I click the recipe button
THEN it shows me the recipe page

GIVEN an account page with a recipe card with a delete button
WHEN I click the delete button on a recipe card
THEN it deletes the recipe card
```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Technology Used

Font End

- HTML / CSS / Bootstrap
- Javascript

Back End

- Node.js
- Express.js
- Config (connection.js)
- MVC: Models (Recipe/ User), Controllers (routes), View (handlebars)
- Database (MySQL)
- Seeds
- Authentication (express-session and cookies)
- Environment Variables
- web api Cloudinary
- npm package multer

## Future Improvement / Development

- Make basic functions work first, like login, logout, signup, add, and delete recipes.
- Add edit recipe and sharing feature
- Add a rating feature

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
