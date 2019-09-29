Name
----

Save tabs on Android (experimental)

Summary
-------

Save list of open tabs. Works on Firefox for Android. Experimental only, suffers from serious bugs.

Description
-----------

This add-on saves the list of open tabs to a JSON file.

The file includes the title and URL of each tab,
as well as the date and time the file was saved.

.. WARNING::
    As of Firefox for Android 68.1.1,
    this add-on will *not* save the correct title and URL for most open tabs,
    instead listing them with a blank title and a URL of ``about:blank``.

by default, this add-on will not work, since background tabs will be unloaded to save memory. This erases the title and sets the URL to "about:blank". To prevent this from happening, go to "about:config" and set

::

    browser.tabs.disableBackgroundZombification

to ``true``.

This is because Firefox for Android saves memory
by unloading background tabs (this is called "zombification").
Unfortunately, this also has the side effect
of removing the title and URL of the tabs from the `Webextension tabs API`_.

.. _Webextension tabs API: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs

There is an option in ``about:config``
where the use can set
``browser.tabs.disableBackgroundZombification`` to ``true``.
Unfortunately, this only slightly reduces the problem;
most tab URLs are still inaccessible,
and the browser does not handle memory pressure as well.

There is an open Bugzilla report concerning this behavior,
but it is unlikely to be fixed soon.

https://bugzilla.mozilla.org/show_bug.cgi?id=1578292
