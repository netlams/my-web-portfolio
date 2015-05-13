(function() {
  var siteControllers = angular.module('siteControllers', ['ngAnimate']);

  /* Home Page Ctrl */
  siteControllers.controller('HomeController', ['$scope', function($scope) {
      $scope.name = 'Dau Lam';
      $scope.profilepic = 'images/self.jpg';
  }]);
  
  /* About Page Ctrl */
  siteControllers.controller('AboutController', ['$scope', function($scope) {
      $scope.name = 'Dau Lam';
      $scope.profilepic = 'images/self.jpg';
      $scope.toggleMenu = function() {
        console.log("clicked");
          // e.preventDefault();
          $("#wrapper").toggleClass("toggled");
      };
  }]);
  
  /* Projects page Ctrl */
  siteControllers.controller('ProjectsController', ['$scope', function($scope) {
      $scope.name = 'Dau Lam';
      $scope.profilepic = 'images/self.jpg';
  }]);

  /* Navigation Module Ctrl */
  siteControllers.controller('NavController', ['$scope', function($scope) {
      $scope.toggleNav = function() {
                      if($("#wrapper").hasClass("toggled")) {
                        console.log("show nav");
                      }
                      else {
                        console.log("hide nav");
                      }
                      $("#wrapper").toggleClass("toggled");
                      $('footer').toggleClass("toggled");

                    };
      $scope.tab = 1; //home page by default
      $scope.isSet = function(checkTab) {
           return this.tab === checkTab;
                    };
      $scope.setTab = function(setTab) {
           this.tab = setTab;
                    };
  }]);

  /* Custom Directives */
  siteControllers.directive('navigationMenu', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/sidebar-nav.html',
      controller: 'NavController'
    };
  });


})();
