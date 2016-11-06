(function (angular) {
    'use strict';

    angular
        .module('MenuApp')
        .component('menuItems', {
            templateUrl: 'src/restaurant/templates/items-list.template.html',
            bindings: {
                items: '<'
            }
        })
    ;
})(window.angular);
