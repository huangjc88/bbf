/**Created by shanglei on 15/3/17.
 *@module my
 */
define([
    'Zepto','underscore','backbone','app/app','app/common/http/getApi'], function( $,_, Backbone,app,getApi) {
    /**Created by shanglei on 15/3/17.
     @class userAdapter
     */
    var user = function () {
        /**
         *@method getUserInfo
         @for userAdapter
         @example userAdapter.getUserInfo()
         */
        var getUserInfo = function () {
            var deferred = $.Deferred();
            var url = './json/user.json';
            var errorCallback = function(resp){
                console.log('resp',resp);
            }
            var request = getApi(url,'GET','',errorCallback);
            return request;
        }
        return {
            getUserInfo: getUserInfo
        };
    };
    return user();
})
