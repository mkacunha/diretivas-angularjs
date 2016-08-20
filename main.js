var app = angular.module('exemplo-diretivas', ['ngAnimate', 'ngRoute','diretivas', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
  .otherwise({
    redirectTo: '/'
  });
});
