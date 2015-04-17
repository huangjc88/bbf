/**
 *@module home
 */
define([
    'Zepto','underscore',
    'backbone',
    'app/app','text!app/tpl/HomeView.html','app/views/BaseView'
], function( $,_, Backbone,app,homeViewTemplate,baseView) {
    /**
     @class HomeView
     @extends baseView
     */
    var HomeView =  baseView.extend({
        template: _.template( homeViewTemplate),
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
            console.log('model',this.model.attributes)
            return this;
        },

        events: { "click .hj-bar-area":    "goToArea" ,
                   "click .hj-bar-user-icon":    "goToPerson",
                   "click .col":    "goDetail"},

        login:function(event){
            window.location.href = app.root + 'login';
        },


        goDetail:function(event){
            window.location.href = app.root + 'shoplist';
        },

        goToArea:function(){
            window.location.href = app.root + 'area';
        },

        goToPerson:function(){
            window.location.href = app.root + 'my';
        }
    });
    return HomeView;
})
