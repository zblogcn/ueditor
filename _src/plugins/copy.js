UE.plugin.register('copy', function () {

    var me = this;



    return {
        bindEvents: {
            'ready': function () {

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
