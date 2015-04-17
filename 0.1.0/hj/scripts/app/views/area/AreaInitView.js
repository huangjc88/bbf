/**
 *@module area
 */
define([
    'Zepto', 'underscore',
    'backbone',
    'text!app/tpl/area/AreaInitItemView.html', 'app/views/BaseView', 'app/app'
], function ($, _, Backbone, areaInitItemTemplate, baseView, app) {
    /**
     @class AreaInitView
     @constructor
     */
    var AreaInitView = Backbone.View.extend({
        tagName: 'div',
        className: 'table-view',
        initialize: function () {
            var self = this;
            this.model.on("reset", this.render, this);
            this.model.on("add", function (area) {
//                self.$el.append(new AreaListItemView({model: area}).render().el);
            });
        },

        render: function () {
            this.$el.empty();
            var items = [];
            console.log('initModels', this.model.models);
            _.each(this.model.models, function (area) {
                console.log('ss', area);
                this.$el.append(new AreaInitItemView({model: area}).render().el);
            }, this);
            return this;
        }
    });
    /**
     @class AreaInitItemView
     @constructor
     */
    var AreaInitItemView = baseView.extend({
        tagName: "div",
        className: "table-view hj-area-init-table-row",
        template: _.template(areaInitItemTemplate),

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
        events: { "click a": "scroll" },

        scroll: function (event) {
            console.log($('#A').position())
            var time = 500;
            var scrollTo = $('#' + $(event.currentTarget).data("id")).position().top;
            var scrollFrom = parseInt(document.body.scrollTop),
                i = 0,
                runEvery = 5; // run every 5ms

            scrollTo = parseInt(scrollTo);
            if ( $('#hasHeader').length > 0 ) {
                document.body.scrollTop = (scrollTo - scrollFrom) + scrollFrom -43;
            }else{
                document.body.scrollTop = (scrollTo - scrollFrom) + scrollFrom;
            }
//            var interval = setInterval(function () {
//                i++;
//                document.body.scrollTop = (scrollTo - scrollFrom) + scrollFrom;
//
//                if (i >= time) {
//                    clearInterval(interval);
//                }
//            }, runEvery);
        },

        getPosition: function (element) {
            var xPosition = 0;
            var yPosition = 0;

            while (element) {
                xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                element = element.offsetParent;
            }
            return { x: xPosition, y: yPosition };
        },
        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }

    });


    return {
        AreaInitView: AreaInitView
    };
})