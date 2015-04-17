/**
 *@module area
 */
define([
    'Zepto','underscore',
    'backbone','app/adapters/area-adapter','iOSdialogBox'
], function( $,_, Backbone,areaAdapter,iOSdialogBox) {
    /**
     @class AreaModel
     @constructor
     */
    var Area = Backbone.Model.extend({

        initialize:function () {
        },
        sync: function(method, model, options) {
            if (method === "read") {
                areaAdapter.getAreas().done(function (data) {
                    options.success(data);
                    var iOSdialogBox1 = new iOSdialogBox();
                    iOSdialogBox1.iOSLodingAlert({
                        'message' : '恭喜你成功加载广告数据！'
                    },'');

                });
            }
        }

    });
    /**
     @class AreaCollection
     @constructor
     */
    var AreaCollection = Backbone.Collection.extend({

//        model: Area,

        sync: function(method, model, options) {
            if (method === "read") {
                areaAdapter.getAreas().done(function (data) {
                    options.success(data);
                    var iOSdialogBox1 = new iOSdialogBox();
                    iOSdialogBox1.iOSLodingAlert({
                        'message' : '恭喜你成功加载地市数据！'
                    },'');

                });
            }
        }

    });

    var AreaInitCollection = Backbone.Collection.extend({

        model: Area,

        sync: function(method, model, options) {
            if (method === "read") {
                areaAdapter.getAreas().done(function (data) {
                    var n = 5;
                    var lists = _.chain(data).groupBy(function(element, index){
                        return Math.floor(index/n);
                    }).toArray().value();
                    options.success(lists);
                });
            }
        }

    });


    return {
        Area:Area,
        AreaCollection:AreaCollection,
        AreaInitCollection:AreaInitCollection
    }

})
