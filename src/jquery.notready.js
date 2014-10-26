(function(window, document)
{
    window.readyCallbacks =     [];
    window.bindReadyCallbacks = [];
    window.jQuery = function(dom)
    {
        if (dom === document || dom === undefined)
        {
            return {ready: enqueueCallback, bind: enqueueCallback};
        }
        else
        {
            enqueueCallback(dom);
        }
    }
    function enqueueCallback(func_or_event, func)
    {
        if (func_or_event == 'ready')
        {
            window.bindReadyCallbacks.push(func);
        }
        else
        {
            window.readyCallbacks.push(func_or_event);
        }
    };
})(window, document);