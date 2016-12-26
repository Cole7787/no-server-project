angular.module('noServer', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.when('', '/home');
  $stateProvider
  .state('home', {
    url: '/home',
    controller: 'homeCtrl',
    templateUrl: './views/html/home.html'
  })
  .state('shop', {
    url: '/shop',
    controller: 'shopCtrl',
    templateUrl: './views/html/shop.html'
  })
  .state('about', {
    url: '/about',
    controller: 'aboutCtrl',
    templateUrl: './views/html/about.html'
  })
  .state('contact', {
    url: '/contact',
    controller: 'contactCtrl',
    templateUrl: './views/html/contact.html'
  });
})
