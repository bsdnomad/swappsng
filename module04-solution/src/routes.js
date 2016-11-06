(function (angular) {
    'use strict';

    angular
        .module('MenuApp')
        .config(RoutesConfig)
    ;

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/restaurant/templates/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/restaurant/templates/categories.template.html',
                controller: 'MenuController as menu',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/category/{categoryShortName}',
                templateUrl: 'src/restaurant/templates/items.template.html',
                controller: 'ItemsController as list',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            })
        ;
    }
})(window.angular);
