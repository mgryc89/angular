 var nameApp = angular.module('Aplikacja', ['ngRoute']);

      nameApp.config(function($routeProvider){
        $routeProvider
          .when('/view1',
            {
                controller: 'hello',
                templateUrl: 'View1.html'
            })
          .when('/view2',
            {
              controller:'hello',
              templateUrl:'View2.html'
            })
          .otherwise({ redirectTo: '/view1'});
      });

      nameApp.controller('hello', function($scope) {
        $scope.hello = 'hello word!';
        $scope.mati = 'czesc tu mati';
        $scope.tablica = ['pierwsza','druga','trzecia'];

        $scope.addWord = function(){
          $scope.tablica.push($scope.newWord);
          $scope.newWord='';
        }
        $scope.deleteWord = function(word){
          var i = $scope.tablica.indexOf(word);
          $scope.tablica.splice(i,1);
        }
      });

      nameApp.controller('Zpliku', function($scope, $http){
        $http.get('json/hello.json').success(function(data){
          $scope.tablicaJson = data;
        });
      });