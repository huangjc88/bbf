/**
 *@module home
 */
define([
    'Zepto',
    'underscore',
    'backbone',
    'pageslider',
    'cookie',
    'app/app',
    'app/views/HomeView','app/models/AdverstModel'
], function( $,_, Backbone,pageslider,cookie,app,HomeView,adverstModel) {
    /**
     @class AppHomeRouter
     @constructor
     */
    var AppRouter = Backbone.Router.extend({
        routes: {
            ":cityCode":  "homeByCity",
            "":  "home"
        },

        initialize: function () {
            this.slider = app.slider;
        },

        /**
         @method homeByCity
         */
        homeByCity: function (cityCode) {
            app.cityCode = cityCode;
            var adverstResults = new adverstModel.Adverst();
            adverstResults.fetch({
                success: function (data) {
                    console.log('data11', data)
                    // Note that we could also 'recycle' the same instance of EmployeeFullView
                    // instead of creating new instances
                    app.slider.slidePage(new HomeView({model: data}).render().$el);
                }
            });
        },
        /**
         @method home
         */
        home: function () {
            var adverstResults = new adverstModel.Adverst();
            adverstResults.fetch({
                success: function (data) {
                    console.log('data11', data)
                    // Note that we could also 'recycle' the same instance of EmployeeFullView
                    // instead of creating new instances
                    $(this).cookie('AA','345')
                    app.slider.slidePage(new HomeView({model: data}).render().$el);
                }
            });
//            this.adverstResults.fetch({reset: true});
            // Since the home view never changes, we instantiate it and render it only once
//            if (!this.homeView) {
//                this.homeView = new HomeView({model: this.adverstResults});
////                this.homeView.render();
//            } else {
//                console.log('reusing home view');
//                this.homeView.delegateEvents(); // delegate events when the view is recycled
//            }
//
//            this.slider.slidePage(this.homeView.render().$el);
        }

    });

    return AppRouter;
})