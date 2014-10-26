(function(window, document, $)
{
    $.each(window.readyCallbacks, function(index, callback)
    {
        $(callback);
    });
    $.each(window.bindReadyCallbacks, function(index, callback)
    {
        $(document).bind('ready', callback);
    });
})(window, document, jQuery);