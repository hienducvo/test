/**
 * Created by hienvo on 3/5/2017.
 */

(function() {
    'use strict';

    angular
        .module('etalkApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {

        $stateProvider.state('mylogin',{
            parent:'app',
            data: {
                authorities: [],
                pageTitle: 'register.title'
            },
            url: '/mylogin',
            views: {
                'content@': {
                    templateUrl: 'app/components/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('login');
                        return $translate.refresh();
                    }]
                }
            }
        });

    }


})();
