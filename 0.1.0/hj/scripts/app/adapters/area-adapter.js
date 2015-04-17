/**
 *@module area
 */
define([
    'Zepto','underscore','backbone','app/app','app/common/http/getApi'], function( $,_, Backbone,app,getApi) {
    /**
     @class areaAdapter
     */
    var area = function () {
        /**
         *@method getAreas
         @for areaAdapter
         @example areaAdapter.getAreas()
         */
        var getAreas = function () {
            var deferred = $.Deferred();
            var areaurl = './json/area.json';
            var errorCallback = function(resp){
                console.log('resp',resp);
            }
            var request = getApi(areaurl,'GET','',errorCallback);
            return request;
        }
        return {
            getAreas: getAreas
        };
    };
    return area();
})