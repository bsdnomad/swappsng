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

  function ToBuyController($scope, slService) {
    this.items = slService.getAvailableItems();
  };

  function AlreadyBoughtController($scope, slService) {
    this.items = slService.getBoughtItems();
  };

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

    svc.availableItems = svc.boughtItems = [];

    svc.initProducts = function(productsList) {
      svc.setAvailableItems(productsList);

      return svc;
    }

    svc.buyListIsEmpty = function() {
      return svc.getAvailableItems().length ? true : false;
    };

    svc.buyItem = function(itemIdx){
      svc.getBoughtItems().push(svc.getAvailableItems().splice(itemIdx, 1));
    }

    svc.getAvailableItems = function(){
      return svc.availableItems;
    }

    svc.setAvailableItems = function(itemsList){
      svc.availableItems = itemsList;

      return svc;
    }

    svc.getBoughtItems = function(){
      return svc.availableItems;
    }
  };
})();
