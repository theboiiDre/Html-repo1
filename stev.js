var app = angular.model('App', []);
app.controller('MainController', function($scope, $http) {
    var onSuccess = function(response) {
        $scope.faculties = response.data.data;
        $scope.countInit = response.data.data.length;
    };

    var error = function() {
        $scope.error = "Could not find user Details";
    };

    $http.get('faculty.json').then(onSuccess, error);
});