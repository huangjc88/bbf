/**
 *@module shopDetail
 */
define([
    'Zepto','underscore',
    'backbone',
    'app/app','text!app/tpl/shopDetail/ShopDetailView.html','text!app/tpl/test/testItem.html','app/views/BaseView',
    'app/common/datepicker/mobiscroll.datetime','app/common/components/dropdown','app/common/components/hjlist'
], function( $,_, Backbone,app,shopDetailViewTpl,testItemTpl,baseView,mobdatetime,dropdown,hjlist) {
    /**
     @class ShopDetailView
     @constructor
     */
    var ShopDetailView = baseView.extend({
        tagName:'div',
        template: _.template( shopDetailViewTpl),
        attributes:{
            id:"myShopDetail"
        },
        initialize: function () {
            baseView.prototype.initialize.call(this);
            _.extend(this.events, baseView.prototype.events);
            this.dropdownView;
            var items;

            items = new Backbone.Collection([
                { id: 12, name: 'apple' },
                { id: 13, name: 'orange' },
                { id: 14, name: 'pear' },
                { id: 15, name: 'grape' },
                { id: 16, name: 'banana' }
            ]);

            this.dropdownView = new Backbone.Dropdown({
                collection: items,
                title: 'name'
            });

            var testItems = new Backbone.Collection([
                { id: 12, value: 'apple' },
                { id: 13, value: 'orange' },
                { id: 14, value: 'pear' },
                { id: 15, value: 'grape' },
                { id: 16, value: 'banana' }
            ]);

            this.hjlist = new Backbone.ListView({testItemTpl:testItemTpl.toString(),collection:testItems});
        },
        constructor: function () {
            this.events = _.extend({}, baseView.prototype.events, this.events);
            baseView.prototype.constructor.apply(this, arguments);
        },
        events: {
            "click #test": "goBack",
            "click .hj-shopdetail-item-fav":"addFav"
        },
        addFav:function(){
            $('body').append(app.loginView.render().el);
        },
        goBack:function(event){
            var curr = new Date().getFullYear();
            var myDate = new Date();
            var date = myDate.getDate();
            date = date + 50;
            myDate.setDate(date);
            var opt = {
                'date': {
                    preset: 'date',
                    dateOrder: 'mmddyy',
                    invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24', '12/25'] }
                },
                'datetime': {
                    preset: 'datetime',
                    minDate: new Date(),
                    maxDate: myDate,
                    headerText:false,
                    stepMinute: 30
                },
                'time': {
                    preset: 'time'
                },
                'credit': {
                    preset: 'date',
                    dateOrder: 'mmyy',
                    dateFormat: 'mm/yy',
                    startYear: curr,
                    endYear: curr + 10,
                    width: 100
                },
                'btn': {
                    preset: 'date',
                    showOnFocus: false
                },
                'inline': {
                    preset: 'date',
                    display: 'inline'
                }
            }
            $('#test').val('').scroller('destroy').scroller($.extend(opt['datetime'], { theme: 'ios', mode: 'scroller' }));
//            $('#demo').val() == 'btn' ? $('#buttons').show() : $('#buttons').hide();
            $('#test').scroller('show');

        },
        render: function () {
            this.$el.html(this.template(this.model.attributes));
            this.$el.append(this.dropdownView.render().$el);
            this.$el.append(this.hjlist.render().$el);
            return this;
        }
    });
    return ShopDetailView;
})
