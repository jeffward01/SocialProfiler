var app = angular.module('app',
    [
        'ui.router', 'LocalStorageModule', 'angular-loading-bar', 'ui.bootstrap', 'ngSanitize', 'angularSpinner',
        'rzModule', '720kb.tooltips'
    ])
    .config([
        'tooltipsConfProvider', function configConf(tooltipsConfProvider) {
            tooltipsConfProvider.configure({
                'smart': true,
                'size': 'large',
                'speed': 'fast',
                'tooltipTemplateUrlCache': true
                //etc...
            });
        }
    ]);

//Custom Filters
app.filter('timezone', function () {
    return function (val) {
        if (val == null) {
            return;
        }
        var date = new Date(val);
        return new Date(date.getUTCFullYear(),
                        date.getUTCMonth(),
                        date.getUTCDate(),
                        date.getUTCHours(),
                        date.getUTCMinutes(),
                        date.getUTCSeconds());
    };
});


//Custom Directives



//Router
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('Home',
    {
        url: "/home",
        templateUrl: "app/views/home.html",
        controller: "homeController",
        data:
        {
            displayName: "Home"
        }
    });

    $stateProvider.state('About',
  {
      url: "/about-us",
      templateUrl: "app/views/about.html",
      controller: "aboutController",
      data:
      {
          displayName: "About"
      }
  });

    $stateProvider.state('Contact',
  {
      url: "/contact-us",
      templateUrl: "app/views/contact.html",
      controller: "contactController",
      data:
      {
          displayName: "Contact Us"
      }
  });


});