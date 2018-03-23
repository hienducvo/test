/**
 * Created by hienvo on 3/9/2017.
 */
(function () {
    'use strict'

    angular.module('myDemo',[])
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {

        $stateProvider.state('home',{
            url:'/home',
            templateUrl:'views/home.html',
            controller: DemoCtrl

            }

        )
    }

})();
