/**
 *@module shopList
 */
define([
    'Zepto','underscore','backbone','app/app','app/common/http/getApi'], function( $,_, Backbone,app,getApi) {
    /**
     @class shopAdapter
     */
    var shop = function () {
        /**
         *@method getShopInits
         @for shopAdapter
         @example shopAdapter.getShopInits()
         */
        var getShopInits = function () {
            var deferred = $.Deferred();
            var url = './json/type.json';
            var errorCallback = function(resp){
                console.log('resp',resp);
            }
            var request = getApi(url,'GET','',errorCallback);
            return request;
        }
        var getShopResults = function () {
            var deferred = $.Deferred();
            var url = './json/shoplist.json';
            var errorCallback = function(resp){
                console.log('resp',resp);
            }
            var request = getApi(url,'GET','',errorCallback);
            return request;
        }
        return {
            getShopInits: getShopInits,
            getShopResults: getShopResults
        };
    };
    return shop();
})