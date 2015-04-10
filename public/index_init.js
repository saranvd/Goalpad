App = angular.module('app', ['ui.router'], ['$urlRouterProvider', function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}])

angular.module('app').run(['$templateCache', function($templateCache) {
  $templateCache.put('temp.test', 'This is the content of the template');
}])


angular.module('app').config(function($stateProvider, $urlRouterProvider) {
	
  //$urlRouterProvider.otherwise('/');

  $stateProvider.state('contacts', {
    url: '/contacts',
    template: '<h1>My Contacts</h1>'
  })
  

  // Now set up the states
  $stateProvider
    .state('test', {
      url: "/test",
      templateUrl: function() {
      	return 'templates/temp.html'
      }  
    })


    .state('foo', {
      url: "/foo",
      templateUrl: 'temp.test'
    })

    .state('add', {
      url: "/add",
      templateUrl: 'templates/addGoal.html'  
    })

    .state('show', {
      url: "/show",
      templateUrl: 'templates/showGoals.html'  
    })

    .state('edit', {
      url: "/edit/:id",
      templateUrl: 'temp.test'
    })

});



angular.module('app').run(['$state', function($state) {
	$state.go('test');
}])


angular.module('app')
	.controller('LoginController', ['$scope', '$http', function($scope, $http){
    $scope['login'] = function() {
      debugger
        $http({
            method: 'POST',
            url: '/login',
            data: "message=sara",
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}

        }).then(function() {
          debugger
        }, function( ){
          debugger
        })
    }
	}])


  angular.module('app')
  .factory('goalsModel', [function(){
    this.goals = [];  

    this.addNewGoal = function(goal) {
      this.goals.push(goal);
    } 

    this.getGoals = function() {
      return this.goals;
    } 

  }])


angular.module('app')
  .controller('AddGoalCtrl', ['$scope', '$http', function($scope, $http){
    $scope['addGoal'] = function() {
      debugger
        $http({
            method: 'PUT',
            url: '/add',
            data: "goal=" + $scope['goal'],
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}

        }).then(function(response) {
          $scope['goal'] = '';
        }, function(error){
          $scope['error'] = 'Error happened. Try again later.';
        })
    }
  }])

  angular.module('app')
  .controller('showGoalsCtrl', ['$scope', '$http', '$state' ,'goalsModel', function($scope, $http, $state, goalsModel){
        $scope['goals'] = [];
      
        $scope['onClick'] = function(goal) {
          //$state.go('edit');
        }

        $http.get('/show').then(function(response) {
            debugger
                        
            var data = response.data;
            for (var index = 0; index < data.length; index++) {
              $scope['goals'].push(data[index]['description']);
            }
        }, function(error){
          $scope['error'] = 'Error happened. Try again later.';
        })
  }])



document.addEventListener("DOMContentLoaded", function(event) { 

  angular.bootstrap(document, ['app']);
});
 