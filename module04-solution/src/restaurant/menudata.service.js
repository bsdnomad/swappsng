(function (angular) {
  'use strict';

  angular
    .module('MenuApp')
    .service('MenuDataService', MenuDataService)
    .constant('BaseURL', 'https://davids-restaurant.herokuapp.com')
    .constant('CategoriesURL', '/categories.json')
    .constant('CategoryItemsURL', '/menu_items.json')
  ;

  MenuDataService.$inject = ['$http', 'BaseURL', 'CategoriesURL', 'CategoryItemsURL']

  function MenuDataService($http, BaseURL, CategoriesURL, CategoryItemsURL) {
    var service     = this;

    service.getAllCategories = function () {
      return $http.get(BaseURL + CategoriesURL);
    };

    service.getItemsForCategory = function (categoryShortName) {
      return $http.get(BaseURL + CategoryItemsURL, {category: categoryShortName});
    };
  }
})(window.angular);
