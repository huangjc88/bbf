/**
 *@module shopList
 */
define([
    'Zepto','underscore',
    'backbone','app/adapters/shop/shop-adapter'
], function( $,_, Backbone,shopAdapter) {
    /**
     @class ShopModel
     @constructor
     */
    var Shop = Backbone.Model.extend({

        initialize:function () {
        },
        sync: function(method, model, options) {
            if (method === "read") {
                options.success(data);
            }
        }
    });
    /**
     @class ShopInitCollection
     @constructor
     */
    var ShopInitCollection = Backbone.Collection.extend({
        sync: function(method, model, options) {
            if (method === "read") {
                shopAdapter.getShopInits().done(function (data) {
                    options.success(data);
                });
            }
        }
    });

    /**
     @class ShopResultModel
     @constructor
     */
    var ShopResult = Backbone.Model.extend({
        sync: function(method, model, options) {
            if (method === "read") {
                shopAdapter.getShopResults().done(function (data) {
                    console.log('kk',data)
                    _.each(data.content, function(item,index){

                        var lastName = item.thumbnailImage.substring(item.thumbnailImage.length - 4, item.thumbnailImage.length);
                        var firstName = item.thumbnailImage.substring(0, item.thumbnailImage.length - 4) + '_168_134';
                        data.content[index].thumbnailImage = firstName + lastName;
                    })
                    options.success(data);
                });
            }
        }
    });

    return {
        Shop:Shop,
        ShopInitCollection:ShopInitCollection,
        ShopResult:ShopResult
    }
})
