(function(){
    'user strict';

    angular.module('NameCalculatorApp', [])

    .controller('NameCalcCotroller', function($scope){
        $scope.name = "";
        $scope.totalValue = 0;
        $scope.displayValue = function(){
            var numericValue = calculateNumericForString($scope.name);
            $scope.totalValue = numericValue;
        };
        
        function calculateNumericForString(string){
            var totalStringValue = 0;
            for(var i = 0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
    });
})();