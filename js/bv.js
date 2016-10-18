navigator.browserVersion = {

    format: function(matches) {
        return 'Yours sincerely,<br/>' + matches[1] + ' (' + matches[2] + ')';
    },

    get: function() {
        var appName = navigator.appName,
            userAgent = navigator.userAgent,
            hasVersion;

        var matches = userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+[\.\d+]*)/i);

        if (matches && (hasVersion = userAgent.match(/version\/([\.\d]+)/i)) != null) {
            matches[2] = hasVersion[1];
        }

        if (!matches) {
            matches[1] = appName;
            matches[2] = navigator.appVersion;
        }

        return this.format(matches);
    }
}