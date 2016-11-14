(function () {
  "use strict";

  angular
    .module('public')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['ApiPath', 'RegistrationService'];

  function ProfileController(ApiPath, RegistrationService) {
    var prCtrl = this;

    prCtrl.basePath = ApiPath;
    prCtrl.user     = RegistrationService.getRegisteredUser();
  }
})();
