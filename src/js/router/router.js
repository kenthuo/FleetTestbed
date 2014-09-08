define(["jquery", "underscore", "backbone", "component/appController"], function ($, _, Backbone, AppController) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "home",
            "login": "login"
        },
        initialize: function() {
            var routeName;
            for (var route in this.routes) {
                routeName = this.routes[route];
                this.route(route, routeName, $.proxy(AppController[routeName], AppController));
            }
        },
        start: function () {
            Backbone.history.start();
        }
    });
    
    return new AppRouter();
});