/**
 *@module common
 */
define([
    'Zepto', 'underscore', 'backbone','app/views/BaseView','app/app'], function ($, _, Backbone, baseView,app) {
    Backbone.ListView = baseView.extend({

        initialize: function (opts) {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);
            this.testItemTpl = opts.testItemTpl
            console.log('11',opts.testItemTpl);
        },
        constructor: function () {
            this.events = _.extend({}, baseView.prototype.events, this.events);
            baseView.prototype.constructor.apply(this, arguments);
        },


        /**
         * Draw the current option
         * @return {Object} this
         */
        render: function () {
            console.log('22',this.collection);
            _.each(this.collection.models, function (item) {
                console.log('item',item)
                this.$el.append(new ItemView({model: item,template:this.testItemTpl}).render().$el);
            }, this);
            return this;
        },


        /**
         * When the user clicks the main item
         * @param  {Event} ev
         * @return {Boolean}
         */
        toggle: function (ev) {
            ev.preventDefault();
            ev.stopPropagation();

            this.trigger("toggle");

            return true;
        }

    });


    /**
     @class ItemView
     @constructor
     */
    var ItemView = baseView.extend({
        initialize: function (opts) {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);
            this.template = _.template(opts.template);
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

    return Backbone.ListView;
})
