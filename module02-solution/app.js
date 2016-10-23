(function(){
  'use strict';

  var app = angular.module('ShoppingListCheckOff', []);

  app
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .provider('ShoppingList', ShoppingListProvider)
    .config(ShoppingListProviderConfig)
  ;

  ShoppingListProviderConfig.$inject  = ['ShoppingListProvider'];
  ToBuyController.$inject             = ['$scope', 'ShoppingList'];
  AlreadyBoughtController.$inject     = ['$scope', 'ShoppingList'];

  function ShoppingListProviderConfig(ShoppingListProvider) {
    ShoppingListProvider.options.products = [{
          name:     'Butter',
          quantity: 10
        },
        {
          name:     'Bread',
          quantity: 10
        },
        {
          name:     'Milk',
          quantity: 3
        },
        {
          name:     'Jam',
          quantity: 2
        },
        {
          name:     'Olive oil',
          quantity: 3
        },
        {
          name:     'Suggar',
          quantity: 20
      }]
    ;
  }

  function ShoppingListProvider() {
    this.options = {
      products: []
    };

    this.$get = function () {
      return (new ShoppingListCheckOffService()).initProducts(this.options.products);
    };
  }

  function ShoppingListCheckOffService() {
    var svc = this;

    // Use this to monitor changes b/n controllers
    svc.timestamp      = false;

    svc.availableItems = svc.boughtItems = [];

    svc.initProducts = function(productsList) {
      svc.setAvailableItems(productsList);

      return svc;
    };

    svc.updateTimestamp = function() {
      svc.timestamp = (new Date()).getMilliseconds();
    };

    svc.getTimestamp = function() {
      return svc.timestamp;
    };

    svc.buyItem = function(itemIdx){
      var item = svc.getAvailableItems().splice(itemIdx, 1);

      if(item){
        svc.getBoughtItems().push(item);

        svc.updateTimestamp();
      }
      else
      {
        throw new Exception('Item not found in available products list!');
      }
    }

    svc.getAvailableItems = function(){
      return svc.availableItems;
    }

    svc.setAvailableItems = function(itemsList){
      svc.availableItems = itemsList;

      return svc;
    }

    svc.getBoughtItems = function(){
      return svc.boughtItems;
    }
  };

  function ToBuyController($scope, slService) {
    this.buyItem = function(itemIdx){
        slService.buyItem(itemIdx);
    };

    this.items    = slService.getAvailableItems();

    $scope.$watch(function () {
      return slService.getTimestamp();
    });
  };

  function AlreadyBoughtController($scope, slService) {
    this.availableItems    = slService.getAvailableItems();
    this.items    = slService.getBoughtItems();
  };
})();
