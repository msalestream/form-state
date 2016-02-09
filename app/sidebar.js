define(["module", "jquery", "app/form-subscriber", "app/form-subject"], function(module, $) {
    var subject = require("app/form-subject");
    var subscriber = require("app/form-subscriber");

    var listener = subscriber.createListener(module, {
        "log": function(change) {
            console.log("Sidebar: "+change.message);
        }
    });

    subject.subscribe(listener);

    return {};
});