/**
 * 使用babel-loader转换es2015
 */
import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';
import angular from "angular";

/*$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const cat of cats) {
    $('<li></li>').text(cat).appendTo(ul);
}*/

/*var test=[1,2,3,4,5];
angular.forEach(test,function(value){
    console.log('test item:',value);
});*/

angular.module('app',[]).directive('app',[App]);

function App(){
    return {
        restrict:"A",
        link:function(scope,element,attr){
            element.html('angular works!');
        }
    }
}