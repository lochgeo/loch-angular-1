'use strict';


// Declare app level module which depends on filters, and services
angular.module('lochApp', [
        'ngRoute',
        'lochApp.filters',
        'lochApp.services',
        'lochApp.directives',
        'lochApp.controllers'
        ])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/',
                    {templateUrl: 'partials/timezone-list.html',
                        controller: 'AllTimeZoneCtrl'});
            $routeProvider.when('/:timezoneId',
                    {templateUrl: 'partials/timezone-detail.html',
                        controller: 'TimeZoneDetailCtrl'});
            $routeProvider.otherwise({redirectTo: '/'});
       }]);