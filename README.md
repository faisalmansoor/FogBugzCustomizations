![screenshot](http://fmansoor.files.wordpress.com/2013/04/image_thumb5.png)

FogBugz supports embedding image in case comments, but, you have to save the image to a file first, even then it appear at the end of the case comment. It would have been great if FogBugz used HTML5 clipboard API and allowed users to paste image directly from clipboard on supported browsers.

The good news is that FogBugz allows javascript customizations, so I came up with a small script to support for pasting images from clipboard myself. To apply the script, navigate to customizations from My Settings > Customizations on the top right hand corner of the page, add a new customization and paste the code from this script.

![screenshot](http://fmansoor.files.wordpress.com/2013/04/image6.png)

Now you should be able to paste images in FogBugz cases directly without having to save them to file. Clipboard support along with a screen capture software like GreenShot makes embedding images in case comments much more simpler and faster.

The script creates a new img element and sets base64 image data to its src property. This significantly increases the size of the html page, but, upon post, FogBugz rips out this base64 data and creates an actual image attachment from it, so this technique does not cause page bloating.

CAttachment.was

![screenshot](http://fmansoor.files.wordpress.com/2013/04/image7.png)
