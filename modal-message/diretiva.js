
var app = angular.module('diretivas', []);

app.directive('modalMsg', function($uibModal){
  var ddo = {};

  ddo.transclude = true;
  ddo.restrict = 'E';
  ddo.template = '<a ng-click="open()" ng-transclude>{{name}}</a>';
  ddo.scope = {
    useController: "@",
    title: "@",
    message: "@",
    size:"@",
    functionOk:"&",
    functionCancel:"&"
  };

  ddo.link = function(scope, element, attrs){

    if (!scope.useController){
      scope.useController = 'ModalController';
    }

    scope.open = function(){
      var modalInstance = $uibModal.open({
        templateUrl: 'modal-message/modalmsg.html',
        controller:  scope.useController,
        size: scope.size,
        windowClass: 'app-modal-window',
        backdrop: true,
        resolve: {
          scopeModal: function(){
            return {
              title: scope.title,
              message: scope.message
            };
          }
        }
      });

      modalInstance.result.then(
        function(){
          scope.functionOk();
        }, function(){
          scope.functionCancel();
        });
      };
    }

    return ddo;
  });

  app.controller('ModalController', function($scope, $uibModalInstance, scopeModal){
    $scope.scopeModal = scopeModal;
    $scope.ok = function(){
      $uibModalInstance.close();
    }

    $scope.cancel = function(){
      $uibModalInstance.dismiss();
    }
  });
