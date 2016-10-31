'use strict';


angular.module('leviathanWeb')
  .controller('MainCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.init = function(){
          if(localStorage.getItem('bouton-rouge') !== null){
              var cache = JSON.parse(localStorage.getItem('bouton-rouge'));

              if(cache !== null && cache.time + (24 * 3600 * 1000) > new Date().getTime()){
                  // Cache still recent
                  $location.path('/panel');
              }
          }
        };

        $scope.send = function(form){
            var cache = {
                time: new Date().getTime(),
                ip: form.ip
            };

            localStorage.setItem('bouton-rouge', JSON.stringify(cache));
            $location.path('/panel');
        };
      
  }]);
