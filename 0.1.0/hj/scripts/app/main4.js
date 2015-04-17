define([
    'Zepto','underscore',
    'backbone','fastclick','app/routers/AppShopDetailRouter','iOSdialogBox','app/app'
], function( $,_, Backbone,fastclick,AppShopDetailRouter,iOSdialogBox,app) {
    $(document).on("ready", function () {
        var router = new AppShopDetailRouter();
        var pathName = Backbone.history.location;
        Backbone.history.start({ pushState: false });
        /*changed by huangjc*/
        FastClick.attach(window.document.body);
    });
})
