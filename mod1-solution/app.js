(function () {
'use strict'

angular.module('LunchCheck',[])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope)
{
  $scope.items="";

$scope.checkFunction=function () {

  var myElement = document.querySelector("#msg");
  //myElement.style.backgroundColor = "#D93600";

  if ($scope.items == "")
  {
    $scope.msg = "Please enter data first";
    myElement.style.color = "#ff0000";
    myElement.style.width = "220px";
    myElement.style.border = "5px solid red";
  }
  else {
    var number = $scope.items.split(',').length;
  //console.log(number);
myElement.style.color = "#00ff00";
myElement.style.width = "100px";
myElement.style.border = "3px solid green";

  if (number < 4)
  {
    $scope.msg = "Enjoy!"
  }
  else {
    $scope.msg="Too much!"
  }
}
};

}

})();
