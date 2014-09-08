define(["jquery", "underscore", "backbone", "text!template/login.html", 
        "css!../../asset/css/login"], function($, _, Backbone, html) {
    var LoginView = Backbone.View.extend({
        tagName: "div",
        template: _.template(html),
        render: function() {
            this.$el.html(this.template({}));
            return this;
        }
    });
    
    return LoginView;
});