(function () {
  "use strict";

  angular
    .module('public')
    .controller('NewsletterController', NewsletterController)
    .directive('itemAvailable', ['$q', '$timeout', 'MenuService', function($q, $timeout, MenuService) {
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$asyncValidators.itemAvailable = function(modelValue, viewValue) {
            var def = $q.defer();

            if(ctrl.$isEmpty(modelValue))
            {
              def.reject();
            }

            $timeout(function(){
              MenuService.getMenuItemData(modelValue)
              .then(function(result){
                def.resolve();
              })
              .catch(function(error){
                def.reject();
              })
              ;
            }, 3000);

            return def.promise;
          }
        }
      };
    }]);
  ;

  NewsletterController.$inject = ['$q', 'menuItems', 'MenuService', 'RegistrationService'];

  function NewsletterController($q, menuItems, MenuService, RegistrationService) {
    var $ctrl = this;

    $ctrl.user = {};

    $ctrl.minLength = 2;
    $ctrl.maxLength = 30;

    $ctrl.itemNotFound = false;

    $ctrl.submit = function(user) {
      MenuService.getMenuItemData(user.menuItem)
        .then(function(result){
          user.menuItemData = result;

          RegistrationService.registerUser(user)

          $ctrl.complete = true;
        })
      ;
    }
  }
})();
