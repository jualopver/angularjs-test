(function (){
'use strict'; 
angular.module('lunchApp', [])
.controller('LunchCheckController', function($scope){
    $scope.checkList = function (){
        if ($scope.lunchMenu){
            var listStr = $scope.lunchMenu.replace(/ /g,'');
            var list = listStr.split(',');
            var quantity = 0;
            var index;
            for(index = 0; index < list.length; ++index) {
                if (list[index].length > 0){
                    ++quantity
                }
            }
            if (quantity > 3){
                // TOO MUCH
                $scope.responseMessage = 'Too much!';
            }else{
                // GOOD
                $scope.responseMessage = 'Enjoy!';
            }            
        }else{
            $scope.responseMessage = '';
        }
    };
});
})();