var app = angular.module('app');

app.controller('newController', function($scope, AppointmentFactory, $location, $routeParams, User) {
  console.log('new Controller Loaded');

  $scope.errors = {};

  User.get(function(data) {
        $scope.user = data;
        console.log($scope.user);
    })

  AppointmentFactory.index(function(data) {
    $scope.appointments = data;
  })

  $scope.create = function(user) {
    $scope.errors = {};
    $scope.newAppointment.user = user;
    console.log($scope.newAppointment,"**********");
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

  $scope.cancel = function() {
      $location.url('/');
  }

  $scope.delete = function(appointment) {
    AppointmentFactory.delete(appointment, function(data) {
      AppointmentFactory.index(function(data) {
        $scope.appointments = data;
      });
    });
  }
})
