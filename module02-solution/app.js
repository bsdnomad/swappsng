(function(){
  'use strict';

  var app = angular.module('ShoppingListCheckOff', []);

  app
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingList', ShoppingListCheckOffService)
  ;

  ToBuyController.$inject             = ['ShoppingList'];
  AlreadyBoughtController.$inject     = ['ShoppingList'];

  function ShoppingListCheckOffService() {
    var svc = this;

    // Use this to monitor changes b/n controllers
    svc.timestamp      = false;

    svc.availableItems = [{
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
      }];

    svc.boughtItems = [];

    svc.initProducts = function(productsList) {
      svc.setAvailableItems(productsList);

      return svc;
    };

    svc.buyItem = function(itemIdx){
      var item = svc.getAvailableItems().splice(itemIdx, 1);

      if(item){
        svc.getBoughtItems().push(item);
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

  function ToBuyController(ShoppingListService) {
    this.buyItem = function(itemIdx){
        ShoppingListService.buyItem(itemIdx);
    };

    this.items    = ShoppingListService.getAvailableItems();

    // $scope.$watch(function () {
    //   return ShoppingListService.getTimestamp();
    // });
  };

  function AlreadyBoughtController(ShoppingListService) {
    this.availableItems    = ShoppingListService.getAvailableItems();
    this.items    = ShoppingListService.getBoughtItems();
  };
})();
