/**
 * Created by hienvo on 3/1/2017.
 */

(function(){
    'use strict'
    angular.module('appTalk')
        .directive('myDirective', myDirective);

    myDirective.$inject = ['$http','Authentication'];

    function  myDirective() {
        
        function linkFunc() {

        }
        return directive;
    }

})();
