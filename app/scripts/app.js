(function () {
    'use strict';
    angular.module('App.Controllers', []);
    angular.module('worktrackerApp', [
        'ngGrid',
        'appverse.rest',
        'ngAnimate',
        'ui.bootstrap',
        'angularRipple',
        'ui.select',
        'ngSanitize',
        'rzModule',
        'rt.resize',
        'chart.js',
        'appverse.router',
        'App.Controllers',
        'appverse.detection',
        'appverse.logging',
        'appverse.translate',
        'appverse',
        'pouchdb'
    ]).run(function ($log, $translate, tmhDynamicLocale, $window) {
        $log.debug('worktrackerApp run');
        //default locale to spanish
        // $log.info( $translate.fallbackLanguage() );
        //var defaultLocale = $window.navigator.userLanguage || $window.navigator.language;
        var defaultLocale = "es-ES";
        $translate.uses(defaultLocale);
        tmhDynamicLocale.set(defaultLocale.toLowerCase());
        $log.info("Default Locale is:" + defaultLocale);
        //$log.info($translate.proposedLanguage());
    });
    AppInit.setConfig({
        environment: {
            'REST_CONFIG': {
                'BaseUrl': '/api',
                'RequestSuffix': ''
            },
            'I18N_CONFIG': {        
                LocaleFilePattern: 'resources/i18n/angular/angular-locale_{{locale}}.js'      
            }

        },
        appverseMobile: {},
        mobileBrowser: {}
    });
}());
