/**
 * Created by simon on 5/3/16.
 */
'use strict';

angular.module('myApp.hello', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/hello', {
            templateUrl: 'hello/hello.html',
            controller: 'HelloCtrl'
        });
    }])

    .controller('HelloCtrl', ['$scope', function ($scope) {
        $scope.name = 'Simon';
        $scope.hello = {
            text:'This is a input',
        };
    }])

    .directive("descDirective", [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'hello/desc-directive.html',
                scope: {
                    item: '='
                },
                replace:true
            };
        }
    ]);