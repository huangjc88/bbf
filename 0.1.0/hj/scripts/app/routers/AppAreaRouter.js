/**
 *@module area
 */
define([
    'Zepto',
    'underscore',
    'backbone',
    'pageslider',
    'app/app',
    'app/views/area/AreaView'
], function( $,_, Backbone,pageslider,app,AreaView) {
    /**
     @class AppRouter
     @constructor
     */
    var AppRouter = Backbone.Router.extend({
        routes: {
            "area":  "area"
        },

        initialize: function () {
        },
        /**
         @method area
         */
        area: function () {
//            var view = new AreaView();
//            view.render();
            app.slider.slidePage(new AreaView().render().$el);
        }

    });

    return AppRouter;
})