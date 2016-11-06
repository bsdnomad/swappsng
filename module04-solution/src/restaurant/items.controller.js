(function(angular){
    'use strict';

    angular
        .module('MenuApp')
        .controller('ItemsController', ItemsController)
    ;

    ItemsController.$inject = ['items'];

    function ItemsController(items) {
        var iCtr = this;

        iCtr.items           = items;
    }
})(window.angular);