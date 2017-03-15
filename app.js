var todoApp = angular.module('todoApp', ['todoApp.filters', 'ngRoute'])
//'ui, ui.filters'

/* todoApp.config(['$routeProvider',
                function($routeProvider) {
                  $routeProvider.
                    when('home', {
                      templateUrl: 'test2.html'
                    }).
                    when('addlist', {
                      templateUrl: 'Addlist.html'
                    }).
                    when('contact', {
                        templateUrl: 'contact.html',
                      }).
                    otherwise({
                      redirectTo: 'test2.html',
                    });
                }]);   
*/

todoApp.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "test2.html"
    })
    .when("/addlist", {
        templateUrl : "Addlist.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    });
});

todoApp.controller('todoController', function($scope) {
  //HIER KOMT JE INHOUD :'D
  

  $scope.category = [
  {name: "Groceries", color: "red"},
  {name: "Work", color: "blue"},
  {name: "School", color: "green"},
  {name: "Lunch", color: "yellow"}];
  
  $scope.filters = {};

  var localItems = JSON.parse(localStorage.getItem("items"));

  if(localItems != undefined && localItems.length>0) {
    $scope.items = localItems;
  }
  else {
    $scope.items = [
      {name:"Milk", checked:false, category:"Groceries"},
      {name:"Eggs", checked:false, category:"Groceries"},
      {name:"Cheese", checked:true, category:"Groceries"},
      {name:"Do Homework", checked:false, category:"School"},
      {name:"Buy pencils", checked:true, category:"School"},
      {name:"Copy code from codebin", checked:false, category:"School"},
      {name:"Make an Angular test", checked:false, category:"Work"}
    ];
  }



//veranderd
  $scope.deleteItem = function(item) {

    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1); 

    localStorage.setItem("items", JSON.stringify($scope.items));
  };

  $scope.saveNewItem = function() {
    console.log($scope.newItem);

    $scope.items.push({
      name: $scope.newItem.name,
      category: $scope.newItem.category,
      checked: false
    });

    $scope.newItem = {};

    localStorage.setItem("items", JSON.stringify($scope.items));
  };

  $scope.updateItem = function(item) {
    item.updating=false;

    localStorage.setItem("items", JSON.stringify($scope.items));
  };

//-----

    $scope.notes = [{
        "ID": "1",
        checked: false,
        "name": "Lezen",
    }, {
        "ID": "2",
        checked: false,
        "name": "Studeren",
    }];
    
    $scope.categories = [{
        "ID": "1",
        "name": "School",
        "color": "red",
    }, {
        "ID": "2",
        "name": "Werk",
        "color": "blue",
    }];


    
    $scope.getCurrencyByCountry = function(note){
        var categories = "";
        angular.forEach($scope.categories, function(value, key) {
            if(note.ID == value.ID){
                categories = value.name;
                return false;
            }
        });
        return categories;
    }

});
  /*$scope.uniqueItems = function(){
    var test = $scope.items.
    console.log(test);
    uniqueArray = jQuery.unique($scope.items.category);
    console.log(uniqueArray);
  return uniqueArray;

  }


  //gekopieerde code

  /*angular.module('ui.filters').filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});*/



 /* $scope.selected = {};
  
  $scope.category = [{id:"1",name:"work"}];

  $scope.data =  [
    {"id":"113000",
      "values":
          [{$scope.category.id = 1},
           {"note":"Loonstroken", "checked": false}]
    },
    {"id":"113002",
      "values":
          [{"category":"school"},
           {"note":"Blok H", "checked": true}]
    }
    ];
  
  $scope.$watch('selected.id', function(id){
    delete $scope.selected.value;
    angular.forEach($scope.data, function(attr){
      if(attr.id === id){
        $scope.selectedAttr = attr;
      }
    });
      });

*/

/*filter('unique', function() {
  return function(items, category) {
    var newitems =[];
    items.forEach(function(project){
      if(item.category === subProjectName)
        newitems.push(project);
    });
    return newitems;
  };
});*/

/*todoApp.filter('unique', function() {
    return function (arr, field) {
        return _.uniq(arr, function(a) { return a[field]; });
    };
});*/

/*todoApp.filter('unique', function () {
  return function (array) {
    uniqueArray = jQuery.unique(array);
    return uniqueArray;
  };
});*/