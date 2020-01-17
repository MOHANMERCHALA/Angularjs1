(function (){

'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
$scope.name="Kuberan";
$scope.sayhello=function(){
    return "Hello I am angular!"
}

});
})();