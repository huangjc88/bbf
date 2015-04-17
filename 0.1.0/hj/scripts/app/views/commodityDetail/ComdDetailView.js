define([
    'Zepto','underscore',
    'backbone',
    'app/app','text!app/tpl/shopDetail/ShopDetailView.html',
    'app/models/shopdetail/ShopDetailModel',
    'app/views/BaseView','app/common/components/carousel'
], function( $,_, Backbone,app,shopDetailViewTpl,ShopDetailModel,baseView,carousel) {
    var ShopDetailView = baseView.extend({
        initialize: function () {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);

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
        render: function (shopId) {
            this.$el.html();
            this.shopDetailData = new ShopDetailModel.ShopDetail({shopId: shopId});
            this.carousel = new carousel();
            var self = this;
            this.shopDetailData.fetch({
                success: function (data) {
                    console.log('llllll',data)
                    $('.content', this.el).append(self.carousel.el); //add it to something

                    self.carousel.appendView( new CarsouelView( {model: data} ) );
                    self.carousel.appendView( new CarsouelView( {model: data} ) );
                    self.carousel.appendView( new CarsouelView( {model: data} ) );

                    self.carousel.prependView(new CarsouelView( {model: data} ) );
                    self.carousel.prependView(new CarsouelView( {model: data} ) );

                    $('.content', this.el).append(new ShopDetailItemView({model:data}).render().$el);
                }
            })
            return this;
        }
    });

    var ShopDetailItemView = baseView.extend({
        template: _.template(shopDetailViewTpl),

        initialize: function () {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);
            this.model.on("change", this.render, this);
            this.model.on("destroy", this.close, this);
        },
        constructor: function () {
            this.events = _.extend({}, baseView.prototype.events, this.events);
            baseView.prototype.constructor.apply(this, arguments);
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }

    });

    var CarsouelView = Backbone.View.extend({
        className: "testview",

        initialize: function(){
            this.render();
        },

        render: function(){
            this.$el.text(this.model.get('name'));
            this.$el.css('background-color', "#"+((1<<24)*Math.random()|0).toString(16));
            return this;
        }

    });
    return ShopDetailView;
})
