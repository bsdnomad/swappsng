(function(angular){
  'use strict';

  angular.module('public')
    .component('nlRegistration', {
      templateUrl: 'src/public/newsletter/newsletter-registration.html',
      bindings: {
        complete: '<',
        menuItems: '<',
        minLength: '<',
        maxLength: '<',
        submit: '&'
      }
    });
})(window.angular);
