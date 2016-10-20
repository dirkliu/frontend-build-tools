(function(){
    'use strict';

    angular.module('app').directive('app',[App]);

    function App(){
        return {
            restrict:"A",
            controller:'AppCtrl',
            //template:require('../template/test.html'),
            link:function(scope,element,attr){
                element.html('angular works!');
            }
        }
    }
})();
