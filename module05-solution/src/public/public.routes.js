(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.newsletter', {
      abstract: true,
      template: '<ui-view></ui-view>'
    })
    .state('public.newsletter.registration', {
      url: '/newsletter/registration',
      templateUrl: 'src/public/newsletter/registration.html',
      controller: 'NewsletterController',
      controllerAs: 'nlCtrl',
      resolve: {
        menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.newsletter.profile', {
      url: '/newsletter/profile',
      templateUrl: 'src/public/newsletter/profile.html',
      controller: 'ProfileController',
      controllerAs: 'prCtrl'
    });
}
})();
