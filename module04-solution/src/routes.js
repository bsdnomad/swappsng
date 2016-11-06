(function (angular) {
    'use strict';

    angular
        .module('MenuApp')
        .config(RoutesConfig)
    ;

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Fallback URL
        $urlRouterProvider.otherwise('/');

        // UI states
        $stateProvider
            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/restaurant/templates/home.template.html'
            })
            // Categories list page
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/restaurant/templates/categories.template.html',
                controller: 'MenuController as menu'
            })
            // Category items list page
            .state('items', {
                url: '/items',
                templateUrl: 'src/restaurant/templates/items.template.html' //,
                //   controller: 'MainShoppingListController as mainList'
            })
        ;
    }
})(window.angular);
