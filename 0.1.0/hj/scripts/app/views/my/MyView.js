/**
 *@module my
 */
define([
    'Zepto','underscore',
    'backbone',
    'text!app/tpl/my/MyView.html','app/views/BaseView'
], function( $,_, Backbone,myViewTemplate,baseView) {
    /**
     @class MyView
     @constructor
     */
    var MyView =  baseView.extend({
        template: _.template( myViewTemplate),
        initialize: function () {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);

        },
        constructor: function(){
            this.events = _.extend( {}, baseView.prototype.events, this.events );
            baseView.prototype.constructor.apply( this, arguments );
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            console.log('model',this.model.attributes);
            return this;
        },

        events: { "click .icon-left-nav":"goBack" },


        goBack:function(event){
            window.history.go(-1);
        }
    });
    return MyView;
})
