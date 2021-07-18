Steps to reproduce:

1. Open multiple tabs.

2. Run the addon.

Expected result: addon generates JSON file with title and URLs of the open tabs.

Actual result: addon generates JSON file with mostly tabs that have no title and URL "about:blank", like this:

    {
      "metadata": {
        "tabCount": 144,
        "dateString": "Mon Sep 02 2019 10:05:49 GMT-0400 (Eastern Daylight Time)",
        "ISOString": "2019-09-02T14:05:49.023Z",
        "localeString": "9/2/2019, 10:05:49 AM",
        "JSONString": "2019-09-02T14:05:49.023Z",
        "getTime": 1567433149023
      },
      "tabs": [
        {
          "url": "about:blank"
        },
        {
          "url": "about:blank"
        },
        // SNIP
        {
          "url": "about:blank"
        }
      ]
    }

Remarks: this is a known bug in Firefox related to "tab zombification" a.k.a. "tab unloading" a.k.a. "tab discarding" a.k.a. "lazy loading". It reduces memory consumption of tabs, which is good, but has the unfortunate side effect of making tab title and URLs blank when queried by the WebExtension API. Tab zombification is described here:

> [Native Fennec] Expire tabs based on LRU and age

https://bugzilla.mozilla.org/show_bug.cgi?id=803575

> Closing zombified tab results in "closed about:blank" toast

https://bugzilla.mozilla.org/show_bug.cgi?id=1018661

> Navigations in discarded tabs via tabs.update are undone when that tab is activated again

https://bugzilla.mozilla.org/show_bug.cgi?id=1465828

Relevant part of the source code is here:

https://searchfox.org/mozilla-central/rev/23f836a71cfe961373c8bd0d0219ec60a64b3c8f/mobile/android/chrome/content/browser.js#4618

Setting "[browser.tabs.disableBackgroundZombification](https://searchfox.org/mozilla-central/rev/e04021f29e6d8a37753ba2b510432315ce05a8d7/mobile/android/app/mobile.js#40)" to true does not help in Firefox for Android, it just means that almost all of the tabs have "about:blank" instead of 100% of tabs showing "about:blank".

Here, I opened a bug report / feature request to request that tab zombification not have the side effect of erasing the tab title and URL that are available to WebExtensions via `browser.tabs.query`:

https://bugzilla.mozilla.org/show_bug.cgi?id=1578292

However, this bug was closed when the Firefox for Android issues tracker was moved to GitHub for versions 80 and later, and I have not been able to confirm the bug in newer versions since `browser.downloads.download` does not work in Firefox for Android 80 and later.
