(function(){
    'use strict';

    // Define application
    angular.module('Module01App', [])
        .controller('Module01Controller', Module01Controller)
    ;

    // Protect DI/s from minification
    Module01Controller.$inject = ['$scope'];

    // Controller definition
    function Module01Controller($scope){
        var _STYLE_ERR      = {color: '#ff0000'};
        var _STYLE_OK       = {color: '#00b674'};

        var _BD_STYLE_ERR   = {border: '2px solid #ff0000'};
        var _BD_STYLE_OK    = {border: '2px solid #00b674'};
        var _BD_STYLE_DFLT  = {};

        var _MSG_TOOMUCH    = 'Too much!';
        var _MSG_ENJOY      = 'Enjoy!';
        var _MSG_ERROR      = 'Please enter data first';

        $scope.message      = '';
        $scope.msgStyle     = _STYLE_OK;
        $scope.inputStyle   = _BD_STYLE_DFLT;

        /**
         * Checks if lunch list is empty, has less or more than 3 meals
         * ALso, trims input
         */
        $scope.checkList = function(){
            // if(typeof($scope.lunchMenu) != 'undefined'){
            // or
            if($scope.lunchMenu !== undefined){
                var meals           = $scope.lunchMenu.split(',');
                var filteredMeals   = [];

                // Filter lunch list
                meals.forEach(function(meal){
                    if(meal && meal.trim().length){
                        console.log(meal.trim(), meal.trim().length);
                        filteredMeals.push(meal);
                    }
                });

                if(filteredMeals.length) {
                    $scope.message      = filteredMeals.length > 3 ? _MSG_TOOMUCH : _MSG_ENJOY;
                    $scope.msgStyle     = _STYLE_OK;
                    $scope.inputStyle   = _BD_STYLE_OK;

                    // TODO: set imploded filtered list as input text
                }
                else
                {
                    $scope.message      = _MSG_ERROR;
                    $scope.msgStyle     = _STYLE_ERR;
                    $scope.inputStyle   = _BD_STYLE_ERR;

                    $scope.resetLunchMenu();
                }
            }
            else
            {
                $scope.message      = _MSG_ERROR;
                $scope.msgStyle     = _STYLE_ERR;
                $scope.inputStyle   = _BD_STYLE_ERR;

                $scope.resetLunchMenu();
            }
        };

        // Reset input text and border style
        $scope.resetLunchMenu = function(){
            $scope.lunchMenu    = null;
        };
    }
})();