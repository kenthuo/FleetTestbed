define(["jquery", "underscore", "backbone", "text!template/home.html"], function($, _, Backbone, html) {
    var HomeView = Backbone.View.extend({
        tagName: "div",
        template: _.template(html),
        render: function() {
            this.$el.html(this.template({}));
            require(["jqueryui"], function() {
                var tabs = $("#tabs").tabs({
                    heightStyle: "fill"
                });
            });                    
            return this;
        }
    });
    
    return HomeView;
});