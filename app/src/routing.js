(function () {
    angular
        .module('webshopModule')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/main.html',
                    controller: 'ProductListCtrl'
                })
                .when('/product/:id', {

                    templateUrl: 'templates/productDetails.html',
                    controller: 'ProductDetailsCtrl'

                    templateUrl: 'templates/productDetails.html'
                })
                .when('/login', {
                    templateUrl: 'templates/loginPage.html',
                    controller: 'LoginCtrl'

                });
        })
})();
