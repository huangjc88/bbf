/**
 *@module area
 */
define([
    'Zepto','underscore',
    'backbone',
    'app/app','text!app/tpl/area/AreaView.html','app/models/AreaModel',
    'app/views/area/AreaListView','app/views/area/AreaInitView'
], function( $,_, Backbone,app,areaViewTemplate,areaModel,areaListView,areaInitView) {
    /**
     @class AreaView
     @constructor
     */
    var AreaView = Backbone.View.extend({
        template: _.template( areaViewTemplate),
        initialize: function () {
            this.areaResults = new areaModel.AreaCollection();
            this.areaInitResults = new areaModel.AreaInitCollection();
        },
        events: {
            "click .dhj_top": "scrollToTop",
            "click .icon-left-nav":"goBack"
        },

        scrollToTop:function(event){
            document.body.scrollTop = 0;
        },

        goBack:function(event){
            window.history.go(-1);
        },

        getPosition:function(element) {
            var xPosition = 0;
            var yPosition = 0;

            while(element) {
                xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                element = element.offsetParent;
            }
            return { x: xPosition, y: yPosition };
        },

        render: function () {
            this.$el.html(this.template());
            this.areaInitResults.fetch({
                success: function (data) {
                    $('.content', this.el).append(new areaInitView.AreaInitView({model: data}).render().$el);
                }
            });
            this.areaResults.fetch({
                success: function (data) {
                    $('.content', this.el).append(new areaListView.AreaListView({model: data}).render().$el);
                }
            });
            return this;
        }
    });
    return AreaView;
})