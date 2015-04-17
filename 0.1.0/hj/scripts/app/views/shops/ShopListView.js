/**
 *@module shopList
 */
define([
    'Zepto','underscore',
    'backbone',
    'app/app','text!app/tpl/shops/ShoplistView.html','app/views/shops/ShopInitView','app/models/shop/ShopModel',
    'app/views/shops/ShopResultView','app/views/BaseView'
], function( $,_, Backbone,app,shoplistViewTpl,shopInitView,shopModel,shopResultView, baseView) {
    /**
     @class ShopListView
     @constructor
     */
    var ShopListView = baseView.extend({
        tagName:'div',
        template: _.template( shoplistViewTpl),
        attributes:{
          id:"myShopList"
        },
        initialize: function () {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);
            this.shopInits = new shopModel.ShopInitCollection();
            this.shopResults = new shopModel.ShopResult();
        },
        constructor: function () {
            this.events = _.extend({}, baseView.prototype.events, this.events);
            baseView.prototype.constructor.apply(this, arguments);
        },
        events: {
            "click .icon-left-nav": "goBack"
        },
        goBack:function(event){
            window.history.go(-1);
        },
        render: function () {
            this.$el.html(this.template());
            var self = this;
            this.shopInits.fetch({
                success: function (data) {
                    $('#myShopList').append(new shopInitView.ShopInitView({model: data}).render().$el);
                    self.shopResults.fetch({
                        success: function (data) {
                            console.log('data',data)
                            $('.content').append(new shopResultView.ShopResultView({model: data}).render().$el);
                        }
                    })
                }
            });
            return this;
        }
    });
    return ShopListView;
})
