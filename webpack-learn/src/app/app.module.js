(function(){
    'use strict';

    angular.module('app',['ngRoute']);

    angular.module('app').config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/',{
            template: require('./template/test.html')
        })
    }]);
})();
