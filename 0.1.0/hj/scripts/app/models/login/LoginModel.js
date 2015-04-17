/**
 *@module common
 */
define([
    'Zepto','underscore',
    'backbone'
], function( $,_, Backbone) {
    /**
     @class loginModel
     @constructor
     */
    var loginModel = Backbone.Model.extend({
        defaults: {
            username: '3',
            password: 'aaaaaaa'
        },
        validate:function(attrs, options){
            console.log('kkk',attrs.username)
            if(attrs.username != 'huangjc') {
                return "Wrong Name!"
            }
//            if(parseInt(attrs.username) > 1) return "Address ZIP code must be a number!";
        },

        initialize:function () {
        }
//        sync: function(method, model, options) {
//            if (method === "read") {
//                options.success(data);
//            }
//        }
    });

    return loginModel;
})
