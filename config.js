requirejs.config({
    "baseUrl": "/untracked/observer",
    "paths": {
        "app": "app",
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        "jqueryUI": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min"
    },
    shim: {
        "jqueryUI": {
            deps:   ["jquery"]
        },
        "app/form-subscriber": {
            deps:   ["app/form-subject"]
        }
    },
    urlArgs: "v=v1"
});