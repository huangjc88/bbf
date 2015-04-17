/**
 *@module home
 */
define([
    'Zepto','underscore',
    'backbone','app/adapters/adverst-adapter','app/common/components/al_notifications'
], function( $,_, Backbone,adverstAdapter,al_notifications) {
    /**
     @class AdverstModel
     @constructor
     */
    var Adverst = Backbone.Model.extend({
        initialize:function () {
        },
        sync: function(method, model, options) {
            if (method === "read") {
                adverstAdapter.getAdversts().done(function (data) {
                    options.success(data[0]['advertisementVOs'][0]);
                    al_notifications('恭喜你成功加载广告数据！','st-success');
                });
            }
        }

    });
    /**
     @class AdverstCollection
     @constructor
     */
    var AdverstCollection = Backbone.Collection.extend({

        model: Adverst,

        sync: function(method, model, options) {
            if (method === "read") {
                adverstAdapter.getAdversts().done(function (data) {
                    options.success(data);
                });
            }
        }

    });


    return {
        Adverst:Adverst,
        AdverstCollection:AdverstCollection
    }

})
