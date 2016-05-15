## Forecast

[http://forecast-syd.herokuapp.com](http://forecast-syd.herokuapp.com)

#### To build 
Install all dependencies from npm and Bower:
```
npm run-script build
```


#### To serve
Create a node server & point browser to `http://localhost:8000/`
```
npm start
```


#### To test 
After installing dependencies, run the Jasmine unit tests through Karma:
```
npm test
```


---

#### Requirements:

**Scenario One:**   
A weather forecast should be displayed based upon the location specified in the url:   
Expected URL: `http://localhost:/weather/:location`  
Example URL: `http://localhost:/weather/( sydney | brisbane )`  

**Scenario Two:**   
A weather forecast should be displayed based upon the location and day specified in the url:   
Expected URL: `http://localhost:/weather/:location/:weekday`   
Example URL: `http://localhost:/weather/:location/( monday | tuesday | etc .. )`  

**Scenario Three:**   
A weather forecast should be displayed based upon the location and the current day:   
Expected URL: `http://localhost:/weather/:location/today`  
Example URL: `http://localhost:/weather/sydney/today`  
