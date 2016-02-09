define(["jquery"], function($) {
    var _subscribers = [];

    function subscribe(listener) {
        _subscribers.push(listener);
    }

    function unSubscribe(listener) {
        var index = _subscribers.indexOf(listener);
        if(index !== -1) {
            delete _subscribers[index];
        } else {
            console.error("Module not found");
        }
    }

    function submitRequest(request) {
        if(_isValidRequest(request)) {
            notifySubscribers(request);
        } else {
            console.error("Invalid request submitted");
        }
    }

    function _isValidRequest(request) {
        return !!request;
    }

    function notifySubscribers(request) {
        $.each(_subscribers, function(position, listener) {
            var func = request.action;
            if(typeof listener.notify[func] === "function") {
                listener.notify[func](request);
            } else {
                console.log(listener.notify);
                console.log(func);
            }
        });
    }

    return {
        subscribe: subscribe,
        unSubscribe: unSubscribe,
        submitRequest: submitRequest
    }
});