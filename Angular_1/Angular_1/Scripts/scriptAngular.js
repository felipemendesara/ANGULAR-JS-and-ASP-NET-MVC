(function () {
    //Cria um Module
    var app = angular.module('MacApp', []);

    //Cria um Controller e registra no Module
    app.controller('HomeController', function ($scope) {
        // $scope é usado para compartilhar dados entre a view e o controller
        $scope.Mensagem = "Primeiro projeto ANGULAR JS com .NET =) ";
    });
})();