describe('Utils', function() {

    var theFactory,
    	days,
    	hours,
        mapsData;

    beforeEach(module('forecastApp'));

    beforeEach(inject(function(Utils) {
            theFactory = Utils;

            days = [{
                'time': 1432648800,
            }, {
                'time': 1432735200,
            }, {
                'time': 1432821600,
            }],
            hours = [{
                'time': 1432677600,
            }, {
                'time': 1432681200,
            }, {
                'time': 1432684800,
            }];

            mapsData = {
                "data": {
                    "results": [{
                        "geometry": {
                            "location": {
                                "lat": 25.2048493,
                                "lng": 55.2707828
                            }
                        }
                    }]
                }
            }

        })
    );

    it('should convert object of timestamps into day names', function() {
        expect(theFactory.nameDays(days)).toEqual(['Wednesday', 'Thursday', 'Friday']);
    });

	it('should convert object of timestamps into hours', function() {
		expect(theFactory.time(hours)).toEqual(['08', '09', '10']);
	});

	it('should get data for required day', function() {
		expect(theFactory.pickDay(days, 'thursday')).toEqual({time:1432735200});
	});

    it('should get lat/long coordinates from json', function() {
        expect(theFactory.getLatLong(mapsData)).toEqual('25.2048493,55.2707828');
    });

});
