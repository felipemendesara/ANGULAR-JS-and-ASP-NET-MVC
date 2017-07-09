angular.module('MacApp')
    .controller('DadosProdutoController', function ($scope, ProdutoService) {
        $scope.Produto = null;
        ProdutoService.GetProduto().then(function (d) {
            $scope.Produto = d.data; // Successo
        }, function () {
            alert('Ocorreu um erro'); // Falhou
        });
    })
    .factory('ProdutoService', function ($http) {
        var fac = {};
        fac.GetProduto = function () {
            return $http.get('/DB/GetProduto');
        }
        return fac;
    });