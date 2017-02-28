app.factory('AppointmentFactory', function($http) {
  console.log('Appointment Factory loaded');
  var factory = {};

  factory.index  = function(callback) {
    $http.get('/appointment').then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.search = function(callback) {
      $http.get('/appointment/:searchString').then(function(res) {
          if (typeof callback === 'function') {
            callback(res.data);
          }
      })
  }
  // factory.show = function(id, callback) {
  //   // $http.get('/friends*/'+id).then(function(res) {
  //     if (typeof callback === 'function') {
  //       callback(res.data);
  //     }
  //   })
  // }
  factory.create = function(newAppointment, callback) {
    $http.post('/appointment/', newAppointment).then(function(res) {
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  // factory.update = function(friend, callback) {
  //   // $http.put('/friends*/'+friend*._id, friend).then(function(res) {
  //     if (typeof callback === 'function') {
  //       callback(res.data);
  //     }
  //   })
  // }
  factory.delete = function(appointment, callback) {
    $http.delete('/appointment/'+appointment._id).then(function(res) {
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }

  return factory;
})

app.factory('User', function() {
    console.log("userfactory");
    var factory = {};
    var user = null;

    factory.get = function(callback) {
        callback(user);
    }
    factory.set = function(username, callback) {
        user = username;
        callback(user);
    }
    factory.delete = function(callback) {
        user = null;
        callback(user);
    }

    return factory;
})
