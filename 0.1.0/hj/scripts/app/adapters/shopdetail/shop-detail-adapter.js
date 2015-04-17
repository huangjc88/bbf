/**
 *@module shopDetail
 */
define([
    'Zepto','underscore','backbone','app/app','app/common/http/getApi'], function( $,_, Backbone,app,getApi) {
    /**
     @class shopDetailAdapter
     */
    var shop = function () {
        /**
         *@method getDetail
         @for shopDetailAdapter
         @example shopDetailAdapter.getDetail()
         */
        var getDetail = function (shopId) {
            var deferred = $.Deferred();
            var url = './json/shopdetail.json';
            var errorCallback = function(resp){
                console.log('resp',resp);
            }
            var request = getApi(url,'GET','',errorCallback);
            return request;
        }
        return {
            getDetail: getDetail
        };
    };
    return shop();
})