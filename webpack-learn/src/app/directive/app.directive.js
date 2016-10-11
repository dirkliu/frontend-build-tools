angular.module('app').directive('app',[App]);

function App(){
    return {
        restrict:"A",
        controller:'AppCtrl',
        link:function(scope,element,attr){
            element.html('angular works!');
        }
    }
}
