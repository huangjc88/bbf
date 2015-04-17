/**
 *@module shopList
 */
define([
    'Zepto', 'underscore',
    'backbone', 'app/models/shop/ShopModel',
    'text!app/tpl/shops/ShopInitView.html', 'text!app/tpl/shops/ShopInitDownView.html', 'app/views/BaseView', 'app/app'
], function ($, _, Backbone, shopModel, shopInitTpl, shopInitDownTpl, baseView, app) {
    /**
     @class ShopInitView
     @constructor
     */
    var ShopInitView = baseView.extend({
        tagName: "ul",
        className: "row sub-header hj-shoplist-init",
        attributes:{
            style:"border-bottom: 1px solid #d3d3d3;"
        },

        initialize: function () {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);
            this.ShopInitDownView = new ShopInitDownView();
            this.listenTo(Backbone, 'init-change-event', function () {
                Backbone.trigger('init-result-event',this.model);
            })
            this.listenTo(Backbone, 'child-click-event', function (dataFromChild) {
                var scrollTo = $('#hasHeader').height() + $('.row.sub-header').height();
                if(this.ShopInitDownView.model === dataFromChild){
                    this.ShopInitDownView.removeDrop();
                }else{
                    this.ShopInitDownView.model = dataFromChild;
                    $('.content').append(this.ShopInitDownView.render(scrollTo).$el);
                }
            }, this);
            this.shopInits = new shopModel.ShopInitCollection();
        },
        constructor: function () {
            this.events = _.extend({}, baseView.prototype.events, this.events);
            baseView.prototype.constructor.apply(this, arguments);
        },
        render: function () {
            _.each(this.model.models, function (initItem) {
                this.$el.append(new ShopInitItemView({model: initItem}).render().$el);
            }, this);
            return this;
        }
    });
    /**
     @class ShopInitItemView
     @constructor
     */
    var ShopInitItemView = baseView.extend({
        tagName: "li",
        className: "col col-33 table-view-cell",
        template: _.template(shopInitTpl),

        initialize: function (options) {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);
            this.model.on('change',this.render,this);
            this.listenTo(Backbone, 'drop-click-event', function (dataFromChild) {
                if(dataFromChild.id === this.model.get("id")){
                    if(this.model.get("valueId") === dataFromChild.valueId){
                        this.model.set({"value":this.model.get('items')[dataFromChild.valueId]["keyName"],"valueId":dataFromChild.valueId,"className":this.model.get('classNameOff')})
                    }else{
                        this.model.set({"value":this.model.get('items')[dataFromChild.valueId]["keyName"],"valueId":dataFromChild.valueId,"className":this.model.get('classNameOff')})
                        Backbone.trigger('init-change-event');
                    }
                }
            })
            this.listenTo(Backbone, 'child-click-event', function (dataFromChild){
                if(this.model === dataFromChild){
                    if(this.model.get('className') === this.model.get('classNameOn')){
                        this.model.set({'className':this.model.get('classNameOff')})
                    }else{
                        this.model.set({'className':this.model.get('classNameOn')})
                    }
                }else{
                    this.model.set({'className':this.model.get('classNameOff')})
                }
            })
        },
        constructor: function () {
            this.events = _.extend({}, baseView.prototype.events, this.events);
            baseView.prototype.constructor.apply(this, arguments);
        },
        events: { "click": "dropDown" },

        dropDown: function (event) {
            Backbone.trigger('child-click-event', this.model);
        },
        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    /**
     @class ShopInitDownView
     @constructor
     */
    var ShopInitDownView = baseView.extend({
        tagName: "ul",
        className: "hj-shoplist-init-dropDown",
        attributes: {
            id: "nav"
        },
        template: _.template(shopInitDownTpl),

        initialize: function () {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);
        },
        constructor: function () {
            this.events = _.extend({}, baseView.prototype.events, this.events);
            baseView.prototype.constructor.apply(this, arguments);
        },
        events: { "click li": "selectType" },
        selectType:function(event){
            this.$el.empty();
            var valueId = $(event.currentTarget).data("id");
            var id = this.model.get('id');
//            this.model.set({"value":this.model.get('items')[id]["keyName"],"valueId":id,'className':this.model.get('classNameOff')})
            Backbone.trigger('drop-click-event',{'id':id,'valueId':valueId});
            this.model = null;
        },
        render: function (scrollTo) {
            this.$el.empty();
            this.$el.html(this.template(this.model.attributes));
            $(this.$el).css('top', scrollTo);
            return this;
        },
        removeDrop:function(){
            this.$el.empty();
            this.model = null;
        }
    });

    return {
        ShopInitView: ShopInitView
    };
})


