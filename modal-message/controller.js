var app = angular.module('exemplo-diretivas');

app.controller('ExemploModalMessageController', function($scope){
  $scope.piadas = [
    {"id":"1", "piada":"O palmeiras tem mundial... ??"},
    {"id":"2", "piada":"O corinthians tem dois mundiais... :)"},
    {"id":"3","piada":"Programador depende apenas de beleza e paciência. Se funcionar, beleza. Senão, paciência."},
    {"id":"4","piada":"Estágio para programador: saber programar Java,PHP,C#,C,C++,Python,Ruby,Objective-C,Visual basic,Perl,css,html,javascript,AngularJS,Jquery e inglês avançado... :p"}
  ]

  $scope.remover = function(piada){
    var indice = $scope.piadas.indexOf(piada);
    $scope.piadas.splice(indice, 1);
  }

  $scope.cancelou = function(piada){
    console.log('Usuário cancelou a remoção da piada: ' + piada.piada);
  }
});
