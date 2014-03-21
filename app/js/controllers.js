'use strict';

/* Controllers */

angular.module('lochApp.controllers', [])
        .controller('AllTimeZoneCtrl', ['$scope', '$http', function($scope, $http) {
                $http.jsonp('http://gomashup.com/json.php?fds=geo/timezone/locations&jsoncallback=JSON_CALLBACK')
                        .success(function(data) {
                            $scope.timezones = data.result;
                        });
            }])
        .controller('TimeZoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
                $http.jsonp('http://gomashup.com/json.php?fds=geo/timezone/' + $routeParams.timezoneId + '&jsoncallback=JSON_CALLBACK')
                        .success(function(data) {
                            $scope.timezoneDetail = data.result[0];
                        });
            }]);