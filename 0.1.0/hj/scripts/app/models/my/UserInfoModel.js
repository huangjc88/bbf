/**
 *@module my
 */
define([
    'Zepto','underscore',
    'backbone','app/adapters/my/user-adapter'
], function( $,_, Backbone,userAdapter) {
    /**
     @class userModel
     @constructor
     */
    var User = Backbone.Model.extend({

        initialize:function () {
        },
        sync: function(method, model, options) {
            if (method === "read") {
                userAdapter.getUserInfo().done(function (data) {
                    options.success(data);

                });
            }
        }

    });
    /**
     @class userInfoCollection
     @constructor
     */
    var UserInfoCollection = Backbone.Collection.extend({
        model:User,
        sync: function(method, model, options) {
            if (method === "read") {
                userAdapter.getUserInfo().done(function (data) {
                    options.success(data);

                });
            }
        }

    });



    return {
        User:User,
        UserInfoCollection:UserInfoCollection
    }

})
