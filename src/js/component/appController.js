define(["jquery", "underscore", "backbone"], function ($, _, Backbone) {
    var AppController = {
        currentView: null,        
        home: function() {
            var self = this;
            require(["view/homeView"], function (HomeView) {
                var view = new HomeView();
                self.renderView.call(self, view);
            });
        },
        login: function() {
            var self = this;
            require(["view/loginView"], function (LoginView) {
                var view = new LoginView();
                self.renderView.call(self, view);
            });
        },        
        renderView: function(view) {
            this.currentView && this.currentView.remove();
            $("#main").html(view.render().el);
            this.currentView = view;
        }
    }
    
    return AppController;
});