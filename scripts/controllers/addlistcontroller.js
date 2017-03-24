todoApp.controller("addlistController", function ($scope) {

  $scope.saveNewItem = function() {
    console.log($scope.newItem);

    $scope.notes.push({
      id: $scope.notes.length + 1,
      checked: false,
      name: $scope.newItem.name,
      wid: $scope.comment.length + 1,
      cid: $scope.categories.length + 1,
      pid: $scope.checkPriorityId($scope.newItem.priority)
    });

    $scope.categories.push({
      id: $scope.categories.length + 1,
      name: $scope.newItem.name2,
    });

   /* $scope.priorities.push({
      id: $scope.priorities.length + 1,
      name: $scope.newItem.priority,
      color: $scope.checkPriorityColor($scope.newItem.priority)
    });*/

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
    //localStorage.setItem("priorities", JSON.stringify($scope.priorities));
    localStorage.setItem("comment", JSON.stringify($scope.comment));
  };

});