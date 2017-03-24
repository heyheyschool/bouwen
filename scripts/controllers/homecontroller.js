todoApp.controller("HomeController", function($scope, DataFactory) {
    $scope.data = DataFactory.getAllData();
});

    todoApp.factory('DataFactory', function() {
    var data = [
        "Op deze website kan je todo lijsten aanmaken",
    	"Ook kan je ze wijzigen en verwijderen",
    	"Op deze pagina zie je afbeeldingen"
    ];

    function getAllData() {
        return data;
    }

    return {
        getAllData: getAllData
    };

});