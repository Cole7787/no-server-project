angular.module('noServer')
.controller('contactCtrl', function($scope){

  $scope.sweet = function(){
    swal("Subscribed!", "We'll give you a shout when something changes.", "success");
  }

})
