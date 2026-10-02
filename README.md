# Assignment 3 - Web Programming

**Student Name:** Emre Albayrak

**Student ID:** 230408042

# File Organization

- **models.js:** This file contains the Student class. The student has properties such as id, name, and other necessary information. The id property is made immutable using Object.defineProperty, so it cannot be changed after the student object is created.

- **database.js:** This file is used to simulate getting data from a database. Since a real database is not used in this project, setTimeout is used to simulate an asynchronous data fetch. This helped me understand how asynchronous operations work in JavaScript.

- **analytics.js:** This file contains the helper functions used for calculations and filtering. For example, it can be used to calculate student-related results and filter the data based on different conditions. Keeping these functions in a separate file makes the code more organized.

- **main.js:** This is the main file of the project. It imports the other modules, waits for the data to be loaded, performs the necessary calculations, and displays the final results.

# Challenges Faced

One of the challenges I faced was making the id property of the Student class immutable. I used Object.defineProperty for this because I wanted the ID to stay the same after the object was created. Understanding how property descriptors work was a little difficult at first.

Another challenge was working with asynchronous callbacks. Since the data is loaded using setTimeout, the calculations should not start before the data is available. I had to make sure that the data was completely loaded before passing it to the analytics functions.

I also tried to keep each part of the project in a separate file. This made the code easier to understand and helped me organize the different responsibilities of the application.

Overall, this assignment helped me practice JavaScript classes, modules, asynchronous operations, callbacks, object property immutability, and basic data analysis.
