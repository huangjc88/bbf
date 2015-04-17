/**
 * Created by shanglei on 15/3/18.
 */
define([
    'Zepto','underscore',
    'backbone','fastclick','app/routers/AppMyRouter','iOSdialogBox','app/app'
], function( $,_, Backbone,fastclick,AppMyRouter,iOSdialogBox,app) {
    $(document).on("ready", function () {
        var router = new AppMyRouter();
        var pathName = Backbone.history.location;
        Backbone.history.start({ trigger: true,pushState: true,root:app.root});
        FastClick.attach(window.document.body);
    });
})
