define(["jquery", "app/sidebar", "app/form-subject", "app/shortcuts"], function($) {
    var subject = require("app/form-subject");
    var sidebar = require("app/sidebar");
    var shortcuts = require("app/shortcuts");

    subject.submitRequest({
        "action": "log",
        "message": "Hello World"
    });
});