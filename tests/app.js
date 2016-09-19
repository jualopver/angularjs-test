(function (){
'use strict'; 
angular.module('myFirstApp', [])
.controller('MyFirstController', function($scope){
    $scope.name = 'Juanma';
    $scope.sayHello = function (){};
});
})();