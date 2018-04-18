(function(){
    'use strict';

    angular.module('MyFirstApp', [])

    .controller('MyFirstController', function($scope) {
        $scope.name = "Arnold Shangala Mwadwaa";
        $scope.sayHello = function(){
            return "Hello, I am learning angular js development!!!";
        };
    });
})();