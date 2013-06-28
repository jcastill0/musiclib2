'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myMusicLib.controllers'));

  describe('UserDetailCtrl', function() {
    var scope, ctrl, $httpBackend,
	userData = function() {
	  return ({id:1, loginName:'julio', email:'xzy@email.com', firstName:'yo', lastName:'tu'})
	};

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
	$httpBackend = _$httpBackend_;
	$httpBackend.expectGET('users/1.json').respond(xyzPhoneData());

	$routeParams.userId = 1;
	scope = $rootScope.$new();
	ctrl = $controller(UserDetailCtrl, {$scope: scope});
    }));

    it('should fetch user detail', inject(function() {
	expect(scope.user).toEqualData({});
	$httpBackend.flush();
	expect(scope.user).toEqualData(userData());	
    }));
  });

  describe('', function() {
    it('should ....', inject(function() {
      //spec body
    }));
  });

});
