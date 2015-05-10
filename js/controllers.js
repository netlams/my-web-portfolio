(function() {
  var siteControllers = angular.module('siteControllers', ['ngAnimate']);

  siteControllers.controller('HomeController', ['$scope', function($scope) {
      $scope.name = 'Dau Lam';
      $scope.profilepic = 'images/self.jpg';
  }]);
  
  siteControllers.controller('AboutController', ['$scope', function($scope) {
      $scope.name = 'Dau Lam';
      $scope.profilepic = 'images/self.jpg';
      $scope.toggleMenu = function() {
        console.log("clicked");
          // e.preventDefault();
          $("#wrapper").toggleClass("toggled");
      };
  }]);
  
  siteControllers.controller('ProjectsController', ['$scope', function($scope) {
      $scope.name = 'Dau Lam';
      $scope.profilepic = 'images/self.jpg';
  }]);
  
  siteControllers.controller('SkillsController', ['$scope', function($scope) {
      $scope.name = 'Dau Lam';
      $scope.profilepic = 'images/self.jpg';
  }]);

  siteControllers.directive('navigation', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/sidebar-nav.html',
      controller: function($scope) {
                    $scope.toggleNav = function() {
                      if($("#wrapper").hasClass("toggled")) {
                        console.log("show nav");
                      }
                      else {
                        console.log("hide nav");
                      }
                      $("#wrapper").toggleClass("toggled");
                    };
                  }
    };
  });


})();
