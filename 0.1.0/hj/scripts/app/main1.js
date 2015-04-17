define([
    'Zepto','underscore',
    'backbone','fastclick','cookie','app/routers/AppRouter','iOSdialogBox','app/app'
], function( $,_, Backbone,fastclick,cookie,AppRouter,iOSdialogBox,app) {
    $(document).on("ready", function () {
        var router = new AppRouter();
        Backbone.history.start({ trigger: true,pushState: true,root:app.root});
        FastClick.attach(window.document.body);
    });
})
