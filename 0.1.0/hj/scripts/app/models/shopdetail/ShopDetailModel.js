/**
 *@module shopDetail
 */
define([
    'Zepto','underscore',
    'backbone','app/adapters/shopdetail/shop-detail-adapter'
], function( $,_, Backbone,shopDetailAdapter) {
    /**
     @class ShopDetailModel
     @constructor
     */
    var ShopDetail = Backbone.Model.extend({
        shopId:'',
        initialize:function (options) {
            this.shopId = options.shopId;
            this.on("invalid",function(model,error){
                alert(error);
            });
        },
        sync: function(method, model, options) {
            if (method === "read") {
                shopDetailAdapter.getDetail(this.shopId).done(function (data) {
                    var lastName = data.thumbnailImage.substring(data.thumbnailImage.length - 4, data.thumbnailImage.length);
                    var firstName = data.thumbnailImage.substring(0, data.thumbnailImage.length - 4) + '_168_134';
                    data.thumbnailImage = firstName + lastName;
                    options.success(data);
                });
            }
        },
        validation: {
            name: function(val, attr, computed) {
                return Backbone.Validation.validators.length(val, attr, 4, this);
            }
        }
    });


    return {
        ShopDetail:ShopDetail
    }
})
