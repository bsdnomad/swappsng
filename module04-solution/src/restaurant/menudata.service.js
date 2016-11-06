(function (angular) {
    'use strict';

    angular
        .module('MenuApp')
        .service('MenuDataService', MenuDataService)
        .constant('BaseURL', 'https://davids-restaurant.herokuapp.com')
        .constant('CategoriesURL', '/categories.json')
        .constant('CategoryItemsURL', '/menu_items.json')
    ;

    MenuDataService.$inject = ['$q', '$http', 'BaseURL', 'CategoriesURL', 'CategoryItemsURL']

    function MenuDataService($q, $http, BaseURL, CategoriesURL, CategoryItemsURL) {
        var service = this;

        service.getAllCategories = function () {
            var deferred = $q.defer();

            $http.get(BaseURL + CategoriesURL)
                .then(function(result){
                    deferred.resolve(result.data);
                })
            ;

            return deferred.promise;
        };

        service.getItemsForCategory = function (categoryShortName) {
            var deferred = $q.defer();

            $http({
                url:    BaseURL + CategoryItemsURL,
                params: {
                    category: categoryShortName
                }
            })
            .then(function(result){
                deferred.resolve(result.data.menu_items);
            });

            return deferred.promise;
        };
    }
})(window.angular);
