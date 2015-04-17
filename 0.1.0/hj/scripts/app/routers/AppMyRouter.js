/**
 *@module my
 */
define([
    'Zepto',
    'underscore',
    'backbone',
    'pageslider',
    'cookie',
    'app/app',
    'app/views/my/MyView','app/models/my/UserInfoModel'
], function( $,_, Backbone,pageslider,cookie,app,MyView,userInfoModel) {
    /**
     @class AppRouter
     @constructor
     */
    var AppRouter = Backbone.Router.extend({
        routes: {
            "my":  "my"
        },

        initialize: function () {
            this.slider = app.slider;
            this.userInfo = new userInfoModel.User();
        },
        /**
         @method my
         */
        my: function () {

            this.userInfo.fetch({
                success: function (data) {
                    app.slider.slidePage(new MyView({model: data}).render().$el);
                }
            });
        }

    });

    return AppRouter;
})
