/**
 *@module area
 */
define([
    'Zepto', 'underscore',
    'backbone', 'text!app/tpl/area/AreaListItemView.html',
    'text!app/tpl/area/AreaInitItemView.html','app/views/BaseView','app/app'
], function ($, _, Backbone, areaListItemTemplate,areaInitItemTemplate, baseView,app) {
    /**
     @class AreaListView
     @constructor
     */
    var AreaListView = Backbone.View.extend({
        tagName: 'ul',
        className: 'table-view',
        initialize: function () {
            var self = this;
            this.model.on("reset", this.render, this);
            this.model.on("add", function (area) {
                self.$el.append(new AreaListItemView({model: area}).render().el);
            });
        },

        render: function () {
            this.$el.empty();
            var items = [];
            _.each(this.model.models, function (area) {
                this.$el.append(new AreaListItemView({model: area}).render().el);
            }, this);
            return this;
        }
    });
    /**
     @class AreaListItemView
     @constructor
     */
    var AreaListItemView = baseView.extend({

        tagName: "ul",

        className: "table-view",
        template: _.template(areaListItemTemplate),

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
        events: { "click .push-right":    "goHome" },

        goHome:function(event){
            window.location.href = app.root + $(event.currentTarget).data("id");
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }

    });


    return {
        AreaListView:AreaListView
    };
})