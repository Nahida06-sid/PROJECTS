# Registration and Login System

## Overview

This project is a simple **Registration and Login System** developed using **HTML5**, **CSS3**, and **JavaScript**. It allows users to register, log in using their registered credentials, and access a dashboard with a personalized welcome message. User information is stored in the browser using **localStorage**.

> **Note:** This is a front-end project created for learning purposes. It does not use a backend server or database.

## Features

- User Registration
- Password Confirmation Validation
- Store user data using Local Storage
- User Login Authentication
- Dashboard with Personalized Welcome Message
- Logout button that redirects to the login page
- Simple and clean user interface

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Local Storage

## Concepts Implemented

### HTML

- Semantic HTML elements
- Forms
- Input fields
- Labels
- Buttons
- Anchor tags

### CSS

- Flexbox
- Box Model
- Typography
- Colors
- Border Radius
- Hover Effects

### JavaScript

- DOM Manipulation
- Event Listeners
- Form Validation
- Local Storage
- JSON Methods (`JSON.stringify()` and `JSON.parse()`)
- Page Redirection

## Project Structure

```text
Project-3-Register_Login/
│
├── dashboard.html
├── dashboard.js
├── index.html
├── login.js
├── register.html
├── register.js
├── script.js
├── style.css
└── README.md
```

## How It Works

1. The user registers by entering their name, email, and password.
2. The password and confirm password fields are validated.
3. User information is stored in the browser using **localStorage**.
4. The user logs in using the registered email and password.
5. After successful login, the user is redirected to the dashboard.
6. The dashboard displays a personalized welcome message using the stored user name.
7. Clicking the Logout button returns the user to the login page.

## Purpose

The purpose of this project is to strengthen my front-end development skills by building a multi-page authentication interface using HTML, CSS, and JavaScript. It also helped me understand how to store and retrieve user data using the browser's Local Storage.

## Learning Outcomes

Through this project, I learned how to:

- Create registration and login forms.
- Validate user input using JavaScript.
- Store and retrieve data using Local Storage.
- Manipulate the DOM to update webpage content.
- Redirect users between multiple pages.
- Organize JavaScript code across different files.

