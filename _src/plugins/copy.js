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
                    alert(me.getLang('copymsg'));
                }
            }
        }
    }
});
