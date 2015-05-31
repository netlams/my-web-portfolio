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
  }]);
  
  /* Projects page Ctrl */
  siteControllers.controller('ProjectsController', ['$scope', '$http', function($scope, $http) {
      $scope.projects = [];
      $http.get('js/data.json').success(function(data) {
        $scope.projects = data;
      });
  }]);

  /* Navigation Module Ctrl */
  siteControllers.controller('NavController', ['$scope', function($scope) {
      $scope.toggleNav = function() {
                      if($("#wrapper").hasClass("toggled")) {
                        console.log("show nav");
                        $('#main-nav-btn').removeClass('glyphicon glyphicon-list')
                          .addClass('glyphicon glyphicon-circle-arrow-left');
                      }
                      else {
                        console.log("hide nav");
                        $('#main-nav-btn').removeClass('glyphicon glyphicon-circle-arrow-left')
                          .addClass('glyphicon glyphicon-list');
                      }
                      $("#wrapper").toggleClass("toggled");
                      $('footer').toggleClass("toggled");

                    };
      $scope.tab = 1; //home page by default
      $scope.isSet = function(checkTab) {
           return this.tab === checkTab;
                    };
      $scope.setActive = function(setTab) {
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
