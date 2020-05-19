(function (window, $) {
    var databus = {};
    databus.ajax = function (url, options) {
        return new Promise(function (resolve, reject) {
            var baseOptions = {
                url: url,
                type: options.type || 'GET',
                data: options.data || {},
                dataType: options.options || "json",
                success: function (result) {
                    if (options.success && typeof options.success == 'function') {
                        options.success()
                    }
                    resolve(result)
                },
                error: function (e) {
                    reject(e)
                }
            };
            baseOptions = Object.assign(baseOptions, options);
            $.ajax(baseOptions)
        })
    };
    databus.get = function (url, options) {
        options.type = 'GET';
        return databus.ajax(url, options)
    };
    databus.post = function (url, options) {
        options.type = 'POST';
        return databus.ajax(url, options)
    };
    databus.jsonP = function (url, options) {
        options.type = 'GET';
        options.jsonp = "callback";
        options.dataType = '"jsonp"';
        options.jsonpCallback =  options.success;
        return databus.ajax(url, options)
    };
    window.databus = databus;
})(window, $);
if (typeof exports === "object") {
    exports.databus = window.databus;
}