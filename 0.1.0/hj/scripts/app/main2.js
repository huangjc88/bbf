define([
    'Zepto','underscore',
    'backbone','fastclick','app/routers/AppAreaRouter','iOSdialogBox','app/app'
], function( $,_, Backbone,fastclick,AppAreaRouter,iOSdialogBox,app) {
    $(document).on("ready", function () {
        var router = new AppAreaRouter();
        var pathName = Backbone.history.location;
        Backbone.history.start({ trigger: true,pushState: true,root:app.root});
        FastClick.attach(window.document.body);
    });
})
