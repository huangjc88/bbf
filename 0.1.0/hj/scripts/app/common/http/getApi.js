/**
 *@module common
 */
define([
    'Zepto','underscore','backbone','app/app'], function( $,_, Backbone,app) {
    /**
     @class getApi
     */
    /**
     *@method getApi
     * @param {string} url 请求地址
     * @param {string} method 请求方法--POST/PUT/GET/DELETE
     * @param {Json} data 请求参数
     * @param {function} errorCallback 错误回调函数
     */
    var getApi = function (url,method,data,errorCallback) {
        var deferred = $.Deferred();
        $.ajax({
            type: method,
//                url: app.rootPath + app.serverName + url,
            url: url,
            data: data,
            contentType: 'application/json',
            success: function (resp) {
                deferred.resolve(resp);
            },
            error: function (data) {
                errorCallback(data);
                deferred.reject(data);
            }
        });
        return deferred.promise();
    };
    return getApi;
})