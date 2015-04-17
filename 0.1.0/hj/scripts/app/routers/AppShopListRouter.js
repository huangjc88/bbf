/**
 *@module shopList
 */
define([
    'Zepto',
    'underscore',
    'backbone',
    'pageslider',
    'app/app',
    'app/views/shops/ShopListView'
], function( $,_, Backbone,pageslider,app,ShopListView) {
    /**
     @class AppShopListRouter
     @constructor
     */
    var AppRouter = Backbone.Router.extend({
        routes: {
            "shoplist":  "shoplist"
        },

        initialize: function () {
        },
        /**
         @method shoplist
         */
        shoplist: function () {
//            var view = new AreaView();
//            view.render();
            app.slider.slidePage(new ShopListView().render().$el);
        }

    });

    return AppRouter;
})