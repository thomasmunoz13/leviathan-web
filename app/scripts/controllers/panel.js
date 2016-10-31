'use strict';


angular.module('leviathanWeb')
  .controller('PanelCtrl',['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {
        $scope.outputs = {};

        var socket;
        var cache;

        $scope.init = function(){
            if(localStorage.getItem('bouton-rouge') !== null){
                cache = JSON.parse(localStorage.getItem('bouton-rouge'));
                connect();
            } else {
                $location.path('/');
            }
        };


        $scope.reset = function(){
            localStorage.setItem('bouton-rouge', null);
            window.location.href = '/';
        };

        var connect = function(){
            socket = io.connect(cache.ip);

            socket.once('connect', function(){
                socket.emit('node:get');

                socket.on('node:get', function(nodes){
                    $timeout(function(){
                        $scope.nodes = nodes;
                    });
                });

                socket.on('deploy:result', function(output){
                    $timeout(function(){
                        $scope.outputs[output.node.name] = {
                            stdout: output.output.stdout,
                            stderr: output.output.stderr,
                            time: new Date().toLocaleString()
                        };
                        console.log($scope.outputs);
                    });
                });
            });
        };

        $scope.deploy = function(){
          socket.emit('deploy');
        };
  }]);
