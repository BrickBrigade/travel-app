Travel app

Create clean and appealing HTML/CSS
Target the dom
Work with objects
Retrieving data from 3 APIs, 1 of which relies on another to work
Done in webpack
Wrapped up with service workers
=====================================================================================================================================================

Spend just as much time cleaning up your code as you spend creating it
Remove any debugging code from final submission

=====================================================================================================================================================

> Includes simple form in which to input:
		Destination
		Date
	If the trip is within a week, provide current weather forecast
	If the trip is farther in the future, provide predicted forecast

> API for weather named Weatherbit API
		Weatherbit only takes coordinates
			API for coordinates named Geonames API

> Display image of location using Pixabay API

=====================================================================================================================================================

Workflow Planning:

Initialize webpack and npm


Hierarchy structure:
======================

- src/
  - client/
    - js/
    - css/
    - html/
    - index.js
  - server/
    - index.js
    - weatherbit.js
    - geonames.js
    - pixabay.js
- package-lock.json
- package.json
- webpack.dev.js
- webpack.prod.js

=====================================================================================================================================================
