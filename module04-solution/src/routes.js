(function (angular) {
  'use strict';

  angular
    .module('MenuApp')
    .config(RoutesConfig)
  ;

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/restaurant/templates/home.template.html'
      })
      // Categories list page
      .state('categories', {
        url: '/categories',
      //   templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
      //   controller: 'MainShoppingListController as mainList'
      })
      // Category items list page
      .state('items', {
        url: '/items',
      //   templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
      //   controller: 'MainShoppingListController as mainList'
      })
    ;
  }

})(window.angular);
