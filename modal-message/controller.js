var app = angular.module('exemplo-diretivas');

app.controller('ExemploModalMessageController', function($scope){
  var veiculos = [
    {"id":"1", "veiculo":"Volkswagen Fusca 1979 vermelho"},
    {"id":"2", "veiculo":"Chevrolet Onix 2016 branco"},
    {"id":"3","veiculo":"Fiat Palio 2000 prata"},
    {"id":"4","veiculo":"Ford Ranger 2015 preta"}
  ]

  $scope.veiculos = angular.copy(veiculos);


  $scope.remover = function(veiculo){
    var indice = $scope.veiculos.indexOf(veiculo);
    $scope.veiculos.splice(indice, 1);
  }

  $scope.cancelou = function(veiculo){
    console.log('Usuário cancelou a remoção do veículo: ' + veiculo.veiculo);
  }

  $scope.carregarVeiculos = function(){
    $scope.veiculos = angular.copy(veiculos);
  }
});
