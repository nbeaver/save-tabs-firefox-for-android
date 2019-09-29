Name
----

Save tabs on Android (experimental)

Summary
-------

Save list of open tabs. Works on Firefox for Android. Experimental only, suffers from serious bugs.

Description
-----------

This add-on saves the list of open tabs to a JSON file.

The file includes the title and URL of each tab, as well as the date and time the file was saved.

Warning: by default, this add-on will not work, since background tabs will be unloaded to save memory. This erases the title and sets the URL to "about:blank". To prevent this from happening, go to "about:config" and set

::

    browser.tabs.disableBackgroundZombification

to ``true``.

Unfortunately, this means Firefox for Android does not .

I have submitted a feature request
to preserve title and URL of zombified tabs,
but it is unlikely that it will be fixed soon.

https://bugzilla.mozilla.org/show_bug.cgi?id=1578292
