name:          Paste Images
description:   Paste images from clipboard
author:        Faisal Mansoor
version:       1.0.0.0

js:

$(document).ready(function () {
    function onPaste(editor, event) {
        try {
            var items = event.clipboardData.items;
            for (idx in items) {
                var item = items[idx];
                if (item.kind == "file" && item.type.substring(0, 5) == "image") {
                    var blob = items[0].getAsFile();
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        try {
                            var img = '<img src="' + event.target.result + '" ></img>';
                            editor.insertHtml( img );      
                        } catch (e) {
                            console.log("Failed to paste image from clipboard ", e);
                        }
                    }; // data url!
                    reader.readAsDataURL(blob);
                    e.preventDefault();
                }
            }
        } catch (e) {
            console.log("Failed to process paint event ", e);
        }
    }
    function bingOnPaste() {
        var editor = this;
        editor.document.getBody()
                    .on('paste', function(e) {
                         onPaste(editor, e.data.$);
                    });
    }
    CKEDITOR.on('instanceCreated', function (e) {
        e.editor.on("instanceReady", bingOnPaste);
    });
});


css:

/* body { background-color: red !important; } */

