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

todoApp.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
    .when("/home", {
        templateUrl : "home.html"
    })
    .when("/addlist", {
        templateUrl : "Addlist.html",
        controller: "addlistController"
    })
    .when("/categories", {
        templateUrl : "categories.html"
    })
    .otherwise({
        redirectTo: 'home.html',
    });
});

todoApp.controller("addlistController", function ($scope) {

  $scope.saveNewItem = function() {
    console.log($scope.newItem);



    $scope.notes.push({
      id: $scope.notes.length + 1,
      checked: false,
      name: $scope.newItem.name,
      wid: $scope.comment.length + 1
    });

    $scope.categories.push({
      id: $scope.categories.length + 1,
      name: $scope.newItem.name2,
      color: $scope.newItem.color
    });

    $scope.priorities.push({
      id: $scope.priorities.length + 1,
      name: $scope.newItem.priority
    });

    $scope.comment.push({
      id: $scope.comment.length + 1,
      note: $scope.newItem.comment
    })

    console.log($scope.notes);
    console.log($scope.newItem);

    $scope.newItem = {};

    console.log($scope.notes);

    localStorage.setItem("notes", JSON.stringify($scope.notes));
    localStorage.setItem("categories", JSON.stringify($scope.categories));
    localStorage.setItem("priorities", JSON.stringify($scope.priorities));
    localStorage.setItem("comment", JSON.stringify($scope.comment));
  };

});

todoApp.controller('todoController', function($scope) {
  
   $scope.deleteItem = function(note) {

    //var index = $scope.notes.indexOf(note);
    //$scope.notes.splice(index, 1); 

    //localStorage.setItem("notes", JSON.stringify($scope.notes));
    var deleteIndex = -1; 
    var note;
    var commentIndex = -1;
    $scope.notes.forEach(function(e, i) {
      if(e.name === note.name) {
        deleteIndex = i;
        commentIndex = commentIndex + note.wid;  
        console.log(note.wid);
        console.log(commentIndex);
      }
    });

    $scope.notes.splice(deleteIndex, 1);
    $scope.comment.splice(commentIndex, 1);
    localStorage.setItem("notes", JSON.stringify($scope.notes));
    localStorage.setItem("comment", JSON.stringify($scope.comment));
  };

  $scope.updateItem = function(note, comment) {
    note.updating=false;
    comment.updating=false; 

    localStorage.setItem("notes", JSON.stringify($scope.notes));
    localStorage.setItem("comments", JSON.stringify($scope.comments));
  };

  $scope.category = {};
  
  $scope.filters = {};

  var localItems = JSON.parse(localStorage.getItem("items"));

  if(localItems != undefined && localItems.length>0) {
    $scope.items = localItems;
  }

//-----

//id van ander object meegeven in notes  

    $scope.notes = [{
        "id": "1",
        checked: false,
        "name": "Lezen",
        "wid": "1",
    }, {
        "id": "2",
        checked: false,
        "name": "Studeren",
        "wid": "2",
    }];
    
    $scope.categories = [{
        "id": "1",
        "name": "School",
        "color": "red",
    }, {
        "id": "2",
        "name": "Werk",
        "color": "blue",
    }];

    $scope.priorities = [{
        "id": "1",
        "name": "High",
    }, {
        "id": "2",
        "name": "Medium",
    }, {
        "id": "3",
        "name": "Low",
    }];

    $scope.comment = [{
        "id": "1",
        "note": "Architectuur boek",
      }, {
        "id": "2",
        "note": "SPA afmaken",
      }, {
        "id": "3",
        "note": "Test",
    }];
    
    $scope.getCategoryByNote = function(note){
        var categories = "";
        angular.forEach($scope.categories, function(value, key) {
            if(note.id == value.id){
                categories = value.name;
                return false;
            }
        });
        return categories;
    }

    $scope.getColorByNote = function(note){
        var colors = "";
        angular.forEach($scope.categories, function(value, key) {
            if(note.id == value.id){
                colors = value.color;
                return false;
            }
        });
        return colors;
    }

    $scope.getPriorityByNote = function(note){
        var priorities = "";
        angular.forEach($scope.priorities, function(value, key) {
            if(note.id == value.id){
                priorities = value.name;
                return false;
            }
        });
        return priorities;
    }

    $scope.getCommentByNote = function(note){
        var comment = "";
        angular.forEach($scope.comment, function(value, key) {
            if(note.wid == value.id){
                comment = value.note;
                return false;
            }
        });
        return comment;
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