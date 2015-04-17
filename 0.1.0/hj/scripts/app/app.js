/**
 *@module appconstant
  @class app
 */
define(['pageslider','Zepto','underscore','backbone','app/views/login/LoginView'
], function(pageslider,$,_,Backbone,loginView) {
    var app = {
        views: {},
        models: {},
        routers: {},
        utils: {},
        adapters: {},
        rootPath:'http://'+location.href.split('//')[1].split('/')[0]+'/',
        serverName:'user/'
    };

    /**
     @method getList
     @static
     */
    app.getList = function (url,data) {
        var deferred = $.Deferred();
        var request = $.ajax({url:url,data:data,async:false});
        deferred.resolve(request);
        return deferred.promise();
    }
    /**
     @method slider
     @static
     */
    app.slider = new PageSlider($('body'));
    /**
     @method root
     @static
     */
    app.root = '/hj/';
    if(Backbone.history.location.pathname.indexOf('dist') > 0){
        if(Backbone.history.location.pathname.indexOf('version') > 0){
            app.root = '/dist/version/0.1.0/'
        }else{
            app.root = '/dist/'
        }
    }
    /**
     @method TestModel
     @extends Backbone.Model
     */
    app.TestModel = Backbone.Model.extend({});
    /**
     @method loginView
     @static
     */
    app.loginView = new loginView()
    return app;

})
