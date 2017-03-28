angular.module("game", ["ngAnimate", "ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "./templates/empty.html"
    })
    .when("/login", {
      templateUrl: "./templates/login.html"
    })
    .when("/gaming", {
      templateUrl: "./templates/content.html"
    });
  })
  .controller('mainctrl', function($scope) {
    $scope.id = 'jigu';
    $scope.number;
    $scope.show = false;
    $scope.click = function() {
      $scope.show = true;
    }
  })
  .controller('contentctrl', function($scope) {
    $scope.td_1 = [{
      class: "nuclick",
      id: "tt00"
    },{
      class: "nuclick",
      id: "tt01"
    },{
      class: "nuclick",
      id: "tt02"
    }];
    $scope.td_2 = [{
      class: "nuclick",
      id: "tt10"
    },{
      class: "nuclick",
      id: "tt11"
    },{
      class: "nuclick",
      id: "tt12"
    }];
    $scope.td_3 = [{
      class: "nuclick",
      id: "tt20"
    },{
      class: "nuclick",
      id: "tt21"
    },{
      class: "nuclick",
      id: "tt22"
    }];
  })