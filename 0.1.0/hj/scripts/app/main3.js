define([
    'Zepto','underscore',
    'backbone','fastclick','app/routers/AppShopListRouter','iOSdialogBox','app/app'
], function( $,_, Backbone,fastclick,AppShopListRouter,iOSdialogBox,app) {
    $(document).on("ready", function () {
        var router = new AppShopListRouter();
        var pathName = Backbone.history.location;
        Backbone.history.start({ trigger: true,pushState: true,root:app.root});
        FastClick.attach(window.document.body);
    });
})
