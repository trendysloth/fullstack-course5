(function () {
'use strict';

angular.module('lunchChecker', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.numOfItems = 0;
  $scope.message = "";

  $scope.countItems = function () {
    $scope.numOfItems = ($scope.items).split(',').length
  };

  $scope.check = function() {
    if ($scope.numOfItems <= 3) {
      $scope.message = "Enjoy!"
    } else {
      $scope.message = "Too much!"
    }
  }
}
})();
