/**
 *@module shopDetail
 */
define([
    'Zepto',
    'underscore',
    'backbone',
    'pageslider','app/app','app/models/shopdetail/ShopDetailModel',
    'app/views/shopDetail/ShopDetailView','app/views/shopDetail/ShopServerView'
], function( $,_, Backbone,pageslider,app,ShopDetailModel,ShopDetailView,ShopServerView) {
    /**
     @class AppShopDetailRouter
     @constructor
     */
    var AppRouter = Backbone.Router.extend({
        routes: {
            ":shopId":  "shopDetail",
            ":shopId/server":"shopServer"
        },

        initialize: function () {
            this.data;
        },
        /**
         @method shopDetail
         */
        shopDetail: function (shopId) {
            this.ShopDetailData = new ShopDetailModel.ShopDetail(shopId);
            var self = this;
            this.ShopDetailData.fetch({
                success: function (data) {
                    self.data = data;
                    console.log('data',self.data)
                    app.slider.slidePage(new ShopDetailView({model:data}).render().$el);
                }
            });
//            app.slider.slidePage(new ShopDetailView().render(shopId).$el);
        },
        /**
         @method shopServer
         @param {String} shopId 商户ID
         */
        shopServer: function (shopId) {
            // Since the home view never changes, we instantiate it and render it only once
            if(this.data != undefined){
                app.slider.slidePage(new ShopServerView({model:this.data}).render().$el);
            }else{
                this.ShopDetailData = new ShopDetailModel.ShopDetail(shopId);
                var self = this;
                this.ShopDetailData.fetch({
                    success: function (data) {
                        console.log('data',data)
                        app.slider.slidePage(new ShopServerView({model:data}).render().$el);
                    }
                });
            }

        }

    });

    return AppRouter;
})