/**
 *@module common
 @constructor
 */
define([
    'Zepto','underscore','backbone','iOSdialogBox'], function( $,_, Backbone,iOSdialogBox) {
    /**
     * @class al_notifications
     */
    /**
     *@method al_notifications
     * @param {string} msg 内容
     * @param {string} type 类型
     */
    var al_notifications = function (msg,type) {
        var iOSdialogBox1 = new iOSdialogBox();
        iOSdialogBox1.iOSLodingAlert({
            'message' : msg
        },'');
    };
    return al_notifications;
})