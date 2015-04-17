/**
 *@module common
 */
define([
    'Zepto','underscore',
    'backbone'
], function( $,_, Backbone) {
    /**
     @class BaseView
     @constructor
     */
    var BaseView = Backbone.View.extend({
        initialize: function () {
            $('.spinner').remove();
//            $('#hasHeader').remove();
//            this.$el.append(new headerView.HeaderView().render().$el);

        },
        events: {
            "touchstart a": "addBg",
            "touchend a": "removeBg",
            "touchmove a": "removeBg",
            "touchstart li": "addBg",
            "touchend li": "removeBg",
            "touchmove li": "removeBg"
        },

        addBg:function(events){
//            if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
                console.log('kkk', events);
                $(events.currentTarget).addClass('active');
//            }
        },
        removeBg:function(events){
//            if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
                $(events.currentTarget).removeClass('active');
//            }
        }

    });
    return BaseView;
})