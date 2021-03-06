(function () {
    angular
        .module('webshopModule')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/main.html',
                    controller: 'productListCtrl'
                })
                .when('/product/:id', {
                    templateUrl: 'templates/productDetails.html',
                    controller: 'productDetailsCtrl'
                })
                .when('/login', {
                    templateUrl: 'templates/loginPage.html',
                    controller: 'loginCtrl'
                })
                .when('/order/:id', {
                    templateUrl: 'templates/orderPage.html',
                    controller: 'orderFormCtrl'
                })
                .when('/registration', {
                    templateUrl: 'templates/registrationPage.html',
                    controller: 'registrationCtrl'
                })
                .when('/profile', {
                    templateUrl: 'templates/userProfile.html',
                    controller: 'userProfileCtrl'
                })
                .when('/cart', {
                    templateUrl: 'templates/cartPage.html',
                    controller: 'cartCtrl'
                })
                .when('/order', {
                    templateUrl: 'templates/cartOrderPage.html',
                    controller: 'cartOrderCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
})();
