// describe('WeatherAPI', function() {

//     var theFactory,
//     	httpBackend,
//     	WeatherAPICall;


//     beforeEach(module('forecastApp'));

//     beforeEach(inject(function(WeatherAPI, $httpBackend) {
//             theFactory = WeatherAPI;
//             httpBackend = $httpBackend;
//             WeatherAPICall = httpBackend.whenJSONP();

//             var mock = {
// 			    currently: {},
// 			    daily: {
// 			    	data:[{}, {}, {}, {}, {}, {}, {}, {}]
// 			    },
// 			    flags: {},
// 			    hourly: {},
// 			    latitude: -33.8696,
// 			    longitude: 151.207,
// 			    offset: 10,
// 			    timezone: "Australia/Sydney"
// 			}

//             WeatherAPICall.respond(mock);
//         })
//     );

//     // it('should return a truthy value from lat/long lookup', function() {
//     //     expect(theFactory.get(-33.8674869,151.2069902)).toBeTruthy();
//     // });

//     it('should do something', function() {

//         httpBackend.flush();

//         expect(angular.isArray(scope.days)).toBeTruthy();
//         expect(scope.days.length > 7).toBeTruthy(); 
//     });

// });
