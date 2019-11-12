'use strict';

describe('Feature test', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('When not stormy', function() {
    it('can land when instructed', function() {
      plane.land(airport)
      expect(airport.planes()).toContain(plane);
    });
  });




});
