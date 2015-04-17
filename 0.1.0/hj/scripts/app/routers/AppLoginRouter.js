define([
    'Zepto',
    'underscore',
    'backbone',
    'pageslider',
    'app/app',
    'app/views/login/LoginView','app/models/login/LoginModel'
], function( $,_, Backbone,pageslider,app,loginView,loginModel) {
    var AppLoginRouter = Backbone.Router.extend({
        routes: {
            "login":  "login"
        },

        initialize: function () {
            this.loginModel = new loginModel();
        },

        login: function () {
             app.slider.slidePage(new loginView({model:this.loginModel}).render().$el);
        }

    });

    return AppLoginRouter;
})