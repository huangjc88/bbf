/**
 *@module common
 */
define([
    'Zepto', 'underscore',
    'backbone','modal', 'text!app/tpl/modal/loginModal.html','app/models/login/LoginModel','app/views/BaseView','app/app','stickit'
], function ($, _, Backbone,modal, loginModalTemplate,loginModel, baseView,app,stickit) {
    /**
     @class LoginView
     @constructor
     */
    var LoginView = Backbone.Modal.extend({

        template: loginModalTemplate,
        cancelEl: '.bbm-button',
//        model:loginModel,

        initialize: function () {
            this.loginModel = new loginModel();
            this.model = this.loginModel;
            this.model.on("invalid",function(model,error){
                alert(error);
            });
        },
        bindings: {
            // Short form binding
            '#username': 'username',

            // Normal binding
            '#password': {
                observe: 'password'
            }
        },
        events: { "click .pull-left":    "goHome" ,"click button":"submit"},

        submit:function(event){
            if(this.model.isValid()){
                console.log('aaa',this.model)
                alert('Great Success!');
            }
        },

        goHome:function(event){
            window.history.go(-1);
        },

        onRender: function () {
//            this.$el.html(this.template(this.model.attributes));
            this.stickit();
            return this;
        }


    });


    return LoginView;
})