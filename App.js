/**
 * Created by liuxin on 15/3/12.
 */
var myApp = angular.module('formApp', ['ui.router', 'ngAnimate']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/pageTab');
    $stateProvider.state(
        'pageTab', {
            url: '/pageTab',
            templateUrl: 'pageTab.html',
            controller: 'formController'
        })
        .state('pageTab.page1', {
            url:'/page1',
            templateUrl: 'page1.html'
        })
        .state('pageTab.page2', {
            url: '/page2',
            templateUrl: 'page2.html'
        })
        .state('pageTab.page3', {
            url:'/page3',
            templateUrl: 'page3.html'
        });
});
myApp.controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};
    $scope.test = 'hello world';

    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };

});