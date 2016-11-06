(function (angular) {
    'use strict';

    angular
        .module('MenuApp')
        .component('categoryItems', {
            templateUrl: 'src/restaurant/templates/items-list.template.html',
            bindings: {
                items: '<'
            }
        })
    ;
})(window.angular);
