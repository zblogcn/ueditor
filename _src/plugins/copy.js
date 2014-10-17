UE.plugin.register('copy', function () {

    var me = this;



    return {
        bindEvents: {
            'ready': function () {
                if (!browser.ie) {
                    //if (window.ZeroClipboard) {
                        //initZeroClipboard();
                    //} else {
                        utils.loadFile(document, {
                            src: me.options.UEDITOR_HOME_URL + "third-party/zeroclipboard/ZeroClipboard.js",
                            tag: "script",
                            type: "text/javascript",
                            defer: "defer"
                        }, function () {
                            //initZeroClipboard();
                        });
                    //}
                }
            }
        },
        commands: {
            'copy': {
                execCommand: function (cmd) {
                    if (!me.document.execCommand('copy')) {
                        alert(me.getLang('copymsg'));
                    }
                }
            }
        }
    }
});
