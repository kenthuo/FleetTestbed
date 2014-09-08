require.config({
    baseUrl: "js/lib",
    paths: {
        jquery: "jquery/jquery-2.1.1.min",
        jqueryui: "jqueryui/jquery-ui.min",
        underscore: "lodash/lodash.min",
        backbone: "backbone/backbone-min",
        bootstrap: "bootstrap/js/bootstrap.min",
        css: "require/plugin/css",
        async: "require/plugin/async",
        text: "require/plugin/text",
        i18n: "require/plugin/i18n",
        model: "../model",
        collection: "../collection",
        view: "../view",
        router: "../router",
        component: "../component",
        template: "../template"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        }
    }
});

require(["router/router"], function(router) {
    $(document).ready(function() {
        router.start();
    });
});