/**
 *@module shopList
 */
define([
    'Zepto', 'underscore',
    'backbone',
    'text!app/tpl/shops/ShopResultItemView.html','app/views/BaseView', 'app/models/shop/ShopModel','app/app'
], function ($, _, Backbone, shopResultItemTpl, baseView,shopModel, app) {
    /**
     @class ShopResultView
     @constructor
     */
    var ShopResultView = baseView.extend({
        /**
         @property tagName
         @type String
         @default "div"
         */
        tagName: "div",
        template: _.template(shopResultItemTpl),

        initialize: function () {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);
            this.model.on('change',this.render);
            this.listenTo(Backbone, 'init-result-event', function (dataFromOther) {
                console.log('777',dataFromOther);
                this.$el.empty();
                var shopResults = new shopModel.ShopResult();
                var self = this;
                shopResults.fetch({
                    success: function (data) {
                        self.model = data;
                        self.render();
                    }
                })
            })
        },
        constructor: function () {
            this.events = _.extend({}, baseView.prototype.events, this.events);
            baseView.prototype.constructor.apply(this, arguments);
        },
        events: {
            "click .hj-shoplist-loadmore": "loadMore",
            "click .hj-shoplist-item":"goToDetail"
        },
        goToDetail:function(event){
            window.location.href = app.root + 'shoplist/detail/#'+$(event.currentTarget).data("id");
        },
        loadMore:function(event){
            var shopResults = new shopModel.ShopResult();
            var self = this;
            shopResults.fetch({
                success: function (data) {
                    var content = self.model.get("content");
//                    console.log('data',this.model);
                    _.each(data.attributes.content, function(childItem,index){
                        content.push(childItem);
                    })
                    self.model = data;
                    self.model.set({"content":content});
                    self.render();
                }
            })
        },

        render: function () {
//            this.$el.empty();
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });


    return {
        ShopResultView: ShopResultView
    };
})