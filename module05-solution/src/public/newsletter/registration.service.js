(function(angular){
  'use strict';

  angular.module('public')
    .service('RegistrationService', RegistrationService)
  ;

  RegistrationService.$inject = ['$rootScope'];

  function RegistrationService($rootScope) {
    var service = this;

    service.user = null;

    service.registerUser = function(userData) {
      service.user = userData;
    }

    service.getRegisteredUser = function() {
      return service.user;
    }
  }
})(window.angular);
