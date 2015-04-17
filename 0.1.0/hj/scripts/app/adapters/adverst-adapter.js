/**
 *@module home
 */
define([
    'Zepto','underscore','backbone','app/app','app/common/http/getApi'], function( $,_, Backbone,app,getApi) {
    /**
     @class adverstAdapter
     */
    var adverst = function () {
        /**
         *@method getAdversts
         @for adverstAdapter
         @example adverstAdapter.getAdversts()
         */
        var getAdversts = function () {
            var deferred = $.Deferred();
//            var adverurl = 'rest/pictures';
            var adverurl = './json/adverst.json';
            var errorCallback = function(resp){
                console.log('resp',resp);
            }
            var request = getApi(adverurl,'GET',{'sign': '2'},errorCallback);
            return request;
        }
        return {
            getAdversts: getAdversts
        };
    };
    return adverst();
})