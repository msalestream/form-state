define(["app/form-subscriber"], function() {

    function createListener(module, monads) {
        return {
            module: module,
            notify: monads
        };
    }

    return {
        createListener: createListener
    };
});
