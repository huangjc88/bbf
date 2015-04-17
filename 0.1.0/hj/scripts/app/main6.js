define([
    'Zepto','underscore',
    'backbone','fastclick','app/routers/AppLoginRouter','iOSdialogBox','app/app'
], function( $,_, Backbone,fastclick,AppLoginRouter,iOSdialogBox,app) {
    $(document).on("ready", function () {
        var router = new AppLoginRouter();
        var pathName = Backbone.history.location;
        Backbone.history.start({ trigger: true,pushState: true,root:app.root});
        FastClick.attach(window.document.body);
    });
})
