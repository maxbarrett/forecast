## Forecast



#### To build:

Run `npm install` & `bower install` for dependencies.

#### To serve:

Run `npm start` & point browser to `http://localhost:8000/`

#### To test:

Install karma globally:
`npm install -g karma-cli`

Run `npm test`


---


**Scenario One:** A weather forecast should be displayed based upon the location specified in the url:
Expected URL: http://localhost:/weather/:location   
Example URL: http://localhost:/weather/( sydney | brisbane )

**Scenario Two:** A weather forecast should be displayed based upon the location and day specified in the url:
Expected URL: http://localhost:/weather/:location/:weekday   
Example URL: http://localhost:/weather/:location/( monday | tuesday | etc .. ) 

**Scenario Three:** A weather forecast should be displayed based upon the location and the current day:
Expected URL: http://localhost:/weather/:location/today   
Example URL: http://localhost:/weather/sydney/today
