var navFn = {
    switchDarkMode: function () {
        "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(), saveToLocal.set("theme", "dark", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(), saveToLocal.set("theme", "light", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),
            "function" == typeof utterancesTheme && utterancesTheme(),
            "object" === ("undefined" == typeof FB ? "undefined" : _typeof(FB)) && window.loadFBComment(),
            window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout(function () {
                return window.disqusReset()
            },
                200)
    }