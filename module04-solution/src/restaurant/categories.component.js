(function (angular) {
    'use strict';

    angular
        .module('MenuApp')
        .component('menuCategories', {
            templateUrl: 'src/restaurant/templates/categories-list.template.html',
            bindings: {
                items: '<'
            }
        })
    ;
})(window.angular);
