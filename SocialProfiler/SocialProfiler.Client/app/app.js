//require('./controllers');
//require('./services');
require('angular-bootstrap/ui-bootstrap-tpls');
require('angular-spinner/angular-spinner');


var app = angular.module('app',
    [
        require('angular-ui-router'), require('angular-local-storage'), require('angular-loading-bar'), 'ui.bootstrap', require('angular-sanitize'), 'angularSpinner',
         require('angular-tooltips')
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