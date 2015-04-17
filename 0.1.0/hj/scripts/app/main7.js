define([
    'Zepto','underscore',
    'backbone','fastclick','app/routers/AppComponentsRouter','iOSdialogBox','app/app'
], function( $,_, Backbone,fastclick,AppComponentsRouter,iOSdialogBox,app) {
    $(document).on("ready", function () {
        var router = new AppComponentsRouter();
        var pathName = Backbone.history.location;
        Backbone.history.start({ trigger: true,pushState: true,root:app.root});
        FastClick.attach(window.document.body);
    });
})
