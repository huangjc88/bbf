/**
 *@module shopDetail
 */
define([
    'Zepto','underscore',
    'backbone',
    'app/app','text!app/tpl/shopDetail/ShopServerView.html','app/views/BaseView'
], function( $,_, Backbone,app,shopServerViewTpl,baseView) {
    /**
     @class ShopServerView
     @constructor
     */
    var ShopServerView = baseView.extend({
        tagName:'div',
        template: _.template( shopServerViewTpl),
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
        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    return ShopServerView;
})
