# IT-Project-Front-end

Modern, open-source ePortfolio system built by unimelb students for capstone subject COMP30022. You can check at https://genius-solio.herokuapp.com/ .

![Image text](https://raw.githubusercontent.com/Jiayi-Joyce-Lu/IT-Project-Front-end/master/src/picture/homepageshots.png?token=AOZXEAOZDF7EOHLPVP7IJIC7MYFD4)

**Built with:** NodeJS, Express, MongoDB, ReactJS and Material-UI

## Getting Started

### Dependencies

- [npm](https://www.npmjs.com/get-npm) and [Node.js](https://nodejs.org/en/)

  - This project is built on Node.js and React

  - Verify installation with

    ```bash
    $ node -v
    v12.16.3 (or other version number)
    $ npm -v
    6.14.4 (or other version number)
    ```
After you've forked and cloned the repository, run the following commands:

    `npm install` - downloads the required libraries/modules

Then, as Material-UI is also available as an [npm package](https://www.npmjs.com/package/@material-ui/core), run the following commands:

    npm install @material-ui/core

Finally, run the command:
    
    npm start

## Main Features

### User HomePage Feature

The left button on the navigation bar is the homepage, which contains a description about the website 
and what can this website do for the users.

---------------------------------HomePage Button PICTURE

### User Blog Feature

The middle button on the navigation bar is the user blog page, which used to display user's portfolio.

![Image text](https://raw.githubusercontent.com/Jiayi-Joyce-Lu/IT-Project-Front-end/master/src/picture/blogpage.png?token=AOZXEAINTUMMIESYNRQVHY27MYHJI)

#### Portfolio List Page
The user can have a look upon the portfolio list on this page, each portfolio contains a title, a cover and the
author's name.

------------------------Portfolio PICTURE

The user is also able to filter the portfolios which are in the different fields by selecting tags.

--------------------------Tages PICTURE

The user also can look for portfolios that he is interested in by search the keywords.

-------------------------Search bar PICTURE

#### Single Portfolio Page
The user can visit any portfolio page from the portfolio list page by clicking the portfolio.

The user can click the red-heart button to mark the portfolio, and it will be added to user center for
visiting it again later on.

-------------------------Mark PIC

The user can read the portfolio by clcking the button "PORTFOLIO"

-------------------------Portfolio PIC

The user can switch to the author's resume by clicking the button "RESUME"

--------------------------Resume PIC

### User Center Feature

The third button on the navigation bar is the Signup/Login or user center feature.

#### Signup/Login page

If users haven't signed up/logged in, when they click this button, the page will link to the signup/login page.

![Image text](https://raw.githubusercontent.com/Jiayi-Joyce-Lu/IT-Project-Front-end/master/src/picture/loginpage.png?token=AOZXEAPRDLRUHICFVM4JJN27MYICE)

In this page, user could click login/signup button, then the page will link to auth0 api which user could use to login/signup.

#### User Center Page

If users have already logged in, when they click this button, the page will link to their user center.
    
![Image text](https://raw.githubusercontent.com/Jiayi-Joyce-Lu/IT-Project-Front-end/master/src/picture/usercenterpage.png?token=AOZXEAJCGE6E3DERTJC3HCK7MYIIW)

In user center page, we developed several sub functions, the first one is Update Profile in user information, and the second one is the Upload File feature in Portfolio Collections and Resume page.
 
--------------------------------PIC?


The user can click "Portfolio Collections" on the left hand side to upload portfolios 
with cover, title, tag and resume.

----------------------------------PIC

The user can click "Bookmarks" on the left hand side to read the portfolios that he has
marked before.

----------------------PIC



 ## Authors
 
 - [Jiayi Lu](https://github.com/Jiayi-Joyce-Lu)
 - [Zhiqing Wu](https://github.com/zhiqingw)
 - [Wei Zhang](https://github.com/Proletariatee)
 - [Xuxu Xue](https://github.com/ElliotXue)
 - [Mingyue Gu](https://github.com/gmy0516)



