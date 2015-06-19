'use strict';

/**
 * @ngdoc overview
 * @name abhishekchavanApp
 * @description
 * # abhishekchavanApp
 *
 * Main module of the application.
 */
angular
  .module('abhishekchavanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }).when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CVCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc function
 * @name abhishekchavanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abhishekchavanApp
 */
angular.module('abhishekchavanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name abhishekchavanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the abhishekchavanApp
 */
angular.module('abhishekchavanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
