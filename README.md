# Akan Names Project

## Project Name
**Akan Names Web Application**

---

### Project Description
The Akan Names Web Application is an interactive tool that allows users to discover their Akan name based on the day of the week they were born and their gender. Akan names are traditional Ghanaian names given according to the day of birth, reflecting cultural identity, spiritual meaning, and certain personality traits.  

This web app provides a simple form for users to input their birth date and select their gender, and it outputs both the day of the week they were born and their corresponding Akan name.

---

### Author Information
**Name:** Ruth Wanja Juma  
**Email:** ruthjuma100@gmail.com  
**Location:** Nairobi-Kenya  

---
### Setup Instructions
1. **Clone the repository**  

   git clone https://github.com/ruthjuma100-afk/akan-names.git

2. **Navigate to the project folder**
cd akan-names

3. **Open the application in a browser**

Open index.html with your preferred web browser (e.g., Chrome, Firefox, Edge).

4. **Optional: Use a live server (VS Code extension recommended) for auto-reload during development.**

---
### BDD (Behavior-Driven Development)
Feature: Akan Name Generator

### Scenario 1: Successful Akan Name Generation

-Given the user opens the Akan Names web app

-When the user enters their year, month, day, and selects their gender.

-Then the app should display the day of the week they were born and their Akan name.

---
### Scenario 2: Missing Inputs

-Given the user does not enter all required fields

When the user clicks submit:-

Then the app should show an alert prompting the user to fill in the missing information.

---
### Scenario 3: Invalid Dates

-Given the user enters a day greater than 31, or a month greater than 12

When the user clicks submit:-

Then the app should show an alert indicating the invalid date input.

---
### Technologies Used

HTML5 – Structure of the webpage

CSS3 – Styling (via styles.css)

JavaScript (ES6) – Form validation and logic to calculate Akan names.

---
### Contact Information

Name: Ruth Juma

Email: ruthjuma100@gmail.com

GitHub: https://github.com/ruthjuma100-afk

---
### License and Copyright Information

License: MIT License

Copyright © 2026 Ruth Juma

Permission is hereby granted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software under the terms of the MIT License.
