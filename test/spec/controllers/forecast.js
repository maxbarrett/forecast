// describe('ForecastCtrl', function() {
//     var scope, ctrl, httpBackend;

//     beforeEach(module('forecastApp'));

//     beforeEach(inject(function($controller, $rootScope, WeatherAPI, $httpBackend) {

//             httpBackend = $httpBackend;
//             var WeatherAPICall = httpBackend.whenJSONP();

//             scope = $rootScope.$new();
//             ctrl = $controller('ForecastCtrl', {
//                 $scope: scope,
//                 $routeParams: {location: '-33.8696,151.2070'},
//                 WeatherAPI: WeatherAPI
//             });

//             //var days = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// 			var mock = {
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

//     it('should get days', function() {

//     	expect(scope.days).toBeUndefined();

//         scope.weather();
//         httpBackend.flush();

//         expect(angular.isArray(scope.days)).toBeTruthy();
//         expect(scope.days.length > 7).toBeTruthy(); 
//     });

//     it('should set correct timezone', function() {
//         expect(scope.timezone).toBeUndefined();

//         scope.weather();
//         httpBackend.flush();

//         expect(scope.timezone).toEqual('Australia/Sydney');
//     });


//     it('test time', function() {
//         console.log(addDays([1,2,3,4]));
//     });


// });

