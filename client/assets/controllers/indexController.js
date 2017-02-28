var app = angular.module('app');

app.controller('indexController', function($scope, AppointmentFactory, $location, $routeParams, User) {
  console.log('index Controller Loaded');

  User.get(function(data) {
      console.log(data,"&&&&&&&");
        if (data == null) {
            user = prompt('username');
            User.set(user, function(data) {
                $scope.user = data;
            })
        } else {
            $scope.user = data;
            console.log($scope.user);
        }

    })


  $scope.errors = {};

  AppointmentFactory.index(function(data) {
    $scope.appointments = data;
  })

  $scope.newPartial = function() {
      $location.url('/new')
  }

  $scope.logout = function() {
      User.delete(function(data) {
          $scope.user = data;
          user = prompt('username');
          User.set(user, function(data) {
              $scope.user = data;
          })
      })
  }

  $scope.search = function() {
      AppointmentFactory.search($scope.searchString, function(data) {
          if (data.errors) {
            console.log(data.errors);
            $scope.errors = data.errors;
          } else {
            $scope.appointments = data;
          }
        })
      }


  $scope.create = function() {
    $scope.errors = {};
    AppointmentFactory.create($scope.newAppointment, function(data) {
      if (data.errors) {
        console.log(data.errors);
        $scope.errors = data.errors;
      } else {
        $scope.newAppointment = {};
        $location.url('/');
      }
    })
  }

  $scope.delete = function(appointment) {
    AppointmentFactory.delete(appointment, function(data) {
      AppointmentFactory.index(function(data) {
        $scope.appointments = data;
      });
    });
}
})
