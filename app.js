(function (){
    'use strict';
    angular.module('namecal', [])
    .controller('namecalcontroller',function($scope){
        $scope.name="";
        $scope.totalval=0;
        $scope.displayname=function(){
            var totalname=calcval($scope.name);
            $scope.totalval=totalname;
        };
        function calcval(string){
            var totalstr=0;
            for(var i=0;i<string.length;i++){
                totalstr+=string.charCodeAt(i);
            }
                return totalstr;
            }
        });
  })
();