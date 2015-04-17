//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'scripts/lib',
    shim: {
        Zepto: {
            exports: '$'
        },
        cookie: {
            deps: [
                'Zepto'
            ],
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'Zepto'
            ],
            exports: 'Backbone'
        },
        pageslider: {
            deps: ['Zepto'],
            exports: 'pageslider'
        },
        fastclick: {
            exports: 'fastclick'
        },
        cookie: {
            deps: ['Zepto'],
            exports: 'cookie'
        },
        iOSdialogBox:{
            deps: ['Zepto'],
            exports: 'iOSdialogBox'
        },
        'zeptoScroll': {
            deps: ['Zepto'],
            exports: 'zeptoScroll'
        },
        'modal':{
            deps: ['backbone'],
            exports: 'modal'
        },
        'stickit':{
            deps: ['backbone'],
            exports: 'stickit'
        }
    },
    paths: {
        app: '../app'
    }
});
