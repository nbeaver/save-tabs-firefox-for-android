Name
----

Save tabs on Android (experimental)

Summary
-------

Save list of open tabs. Works on Firefox for Android.

Experimental only, suffers from a serious bug.

Description
-----------

This add-on saves the list of open tabs to a JSON file.

The file includes the title and URL of each tab,
as well as the date and time the file was saved.

**WARNING**

As of Firefox for Android 68.1.1,
this add-on will *not* save the correct title and URL for most open tabs,
instead listing them with a blank title and a URL of ``about:blank``.

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

    ::

        // If a tab has not been active for this long (seconds), then it may be
        // turned into a zombie tab to preemptively free up memory. -1 disables time-based
        // expiration (but low-memory conditions may still require the tab to be zombified).
        pref("browser.tabs.expireTime", 900);

https://searchfox.org/mozilla-central/rev/e04021f29e6d8a37753ba2b510432315ce05a8d7/mobile/android/app/mobile.js#40

    ::

        /**
         * Unloads the tab from memory to free up resources. The tab will be restored from its session
         * store data either automatically when it gets selected or after calling unzombify().
         */
        zombify: function zombify() {

https://searchfox.org/mozilla-central/rev/23f836a71cfe961373c8bd0d0219ec60a64b3c8f/mobile/android/chrome/content/browser.js#4618

There is an open Bugzilla report concerning this behavior,
but it is unlikely to be fixed soon.



https://bugzilla.mozilla.org/show_bug.cgi?id=1578292
