(function (angular) {
  'use strict';

  angular
    .module('MenuApp')
    .controller('MenuController', MenuController)
  ;

  MenuController.$inject = ['MenuDataService'];

  function MenuController(MenuDataService) {
    var menu = this;

    // menu.categories = [];
    //
    // menu.$onInit = function () {
    //   MenuDataService.getAllCategories()
    //   .then(function (result) {
    //     menu.categories = result;
    //   });
    // };
  }
})(window.angular);
