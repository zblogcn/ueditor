/**
 * 插入附件
 */
UE.plugin.register('insertfile', function (){

    var me = this;

    function getFileIcon(url){
        var ext = url.substr(url.lastIndexOf('.') + 1).toLowerCase(),
            maps = {
                "aac": "aac.png",
                "ai": "ai.png",
                "aiff": "aiff.png",
                "avi": "avi.png",
                "bmp": "bmp.png",
                "c": "c.png",
                "cpp": "cpp.png",
                "css": "css.png",
                "dat": "dat.png",
                "dmg": "dmg.png",
                "doc": "doc.png",
                "dotx": "dotx.png",
                "dwg": "dwg.png",
                "dxf": "dxf.png",
                "eps": "eps.png",
                "exe": "exe.png",
                "flv": "flv.png",
                "gif": "gif.png",
                "h": "h.png",
                "hpp": "hpp.png",
                "html": "html.png",
                "ics": "ics.png",
                "iso": "iso.png",
                "java": "java.png",
                "jpg": "jpg.png",
                "js": "js.png",
                "key": "key.png",
                "less": "less.png",
                "mid": "mid.png",
                "mp3": "mp3.png",
                "mp4": "mp4.png",
                "mpg": "mpg.png",
                "odf": "odf.png",
                "ods": "ods.png",
                "odt": "odt.png",
                "otp": "otp.png",
                "ots": "ots.png",
                "ott": "ott.png",
                "pdf": "pdf.png",
                "php": "php.png",
                "png": "png.png",
                "ppt": "ppt.png",
                "psd": "psd.png",
                "py": "py.png",
                "qt": "qt.png",
                "rar": "rar.png",
                "rb": "rb.png",
                "rtf": "rtf.png",
                "sass": "sass.png",
                "scss": "scss.png",
                "sql": "sql.png",
                "tga": "tga.png",
                "tgz": "tgz.png",
                "tiff": "tiff.png",
                "txt": "txt.png",
                "wav": "wav.png",
                "xls": "xls.png",
                "xlsx": "xlsx.png",
                "xml": "xml.png",
                "yml": "yml.png",
                "zba": "zba.png",
                "zip": "zip.png",
                "_blank": "_blank.png",
                "_page": "_page.png"
            };
        return maps[ext] ? maps[ext] : maps['_blank'];
    }

    return {
        commands:{
            'insertfile': {
                execCommand: function (command, filelist){
                    filelist = utils.isArray(filelist) ? filelist : [filelist];

                    if(me.fireEvent('beforeinsertfile',filelist) === true){
                        return;
                    }

                    var i, item, icon, title,
                        html = '',
                        URL = me.getOpt('UEDITOR_HOME_URL'),
                        iconDir = zbp.options.bloghost + "zb_system/image/filetype/";
                    for (i = 0; i < filelist.length; i++) {
                        item = filelist[i];
                        icon = iconDir + getFileIcon(item.url);
                        title = item.title || item.url.substr(item.url.lastIndexOf('/') + 1);
                        html += '<p style="line-height: 16px;">' +
                            '<img style="vertical-align: middle; margin-right: 2px;" src="'+ icon + '" _src="' + icon + '" />' +
                            '<a style="font-size:12px; color:#0066cc;" href="' + item.url +'" title="' + title + '">' + title + '</a>' +
                            '</p>';
                    }
                    me.execCommand('insertHtml', html);

                    me.fireEvent('afterinsertfile',filelist);
                }
            }
        }
    }
});


