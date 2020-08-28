# Project-1

Lydia Moore's WeatherWize app: (https://lydiamoore35.github.io/Project-1/)

## WeatherWize: 
An application that generates games and activities based on the next five days weather forcast. You can click on each activitiy, that will load further intruction for that specific game.
### Technologies Used
- OpenWeather API and selected the 5 day forcast based on zipcode
- 3 pieces of info from the API
- sticky nav bar
- not quite a tooltip, but a tag to new site
### Approach Taken
- wireframing 
- layout in html
- establish css classes and id's
    - create my input field and button
- begin jquery
    - click event that grabs the date, temp, and what it feels like
- change the date appearance using subtring()
- create if else statements based on weather range
    - for each of the 5 days
        - originally going to be a loop but due to the way the API is structured including hourly forcast, this made things tricky when using a loop
- create the nav bar
### Unsolved Problems
- github sheets and github recognizing jquery 
- Not so much a problem, but a goal would be to make this DRY
### Improvements For Later
- More complex UI such as a drag and drop or filter list
- Pull more info from the API



