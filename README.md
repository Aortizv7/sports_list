** Set Up **

1. Clone the repository from github here: https://github.com/Aortizv7/sports_list.git

2. Open your terminal/code editor terminal and run git clone +url
   _Example_
   git clone https://github.com/Aortizv7/sports_list.git

3. Run < npm i > after the respository has been cloned
   ^ this will ensure all dependencies are installed correctly.

4. Open the application up on your code editor / unless you already have it open.

5. Run < npm start >
   ^ this will open up your application on the browser.

** Purpose of the Application **

The overall functionality of this application is centered around different sports names.
The user can click on a specific sport to remove it from the list, if they list is empty a message
appears to warn the user. The user can reset the list at any time to bring back all of the deleted items.

It contains Flex-Box for the styling/positioning and media queries to make it mobile responsive. The fonts come from google and can be implemented as a link tag and used thorughout the whole application. The colors where provided by Coolors.co which is a free color generator and the background image comes from unsplash.com

On the deletion event, there is an animation that uses CSS keyframes to create a shirnking and vanishing illusion.

** Technologies **

This Single-Page-Application (SPA) is built with React, HTML, CSS, and flex-box.
It contains some simple testing on the data file with the aid of Jest.
