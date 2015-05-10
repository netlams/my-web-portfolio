(function() {

  var myApp = angular.module('myApp', [
    'ngRoute',
    'siteControllers'
  ]);

  myApp.run(function($rootScope){
    $rootScope.title = "Dau Lam - Software Developer";
  });

  myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).
    when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
    }).
    when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsController'
    }).
    when('/skills', {
      templateUrl: 'partials/skills.html',
      controller: 'SkillsController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);

})();