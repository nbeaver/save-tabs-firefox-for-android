Steps to reproduce:

1. Open one or more tabs.

2. Run the addon.

Expected result: addon generates JSON file and downloads it.

Actual result: addon does nothing.

As of Firefox for Android version 80 and later, the `browser.downloads.download` WebExtension API [no longer works](https://github.com/mozilla-mobile/fenix/issues/16585). (Previously it did not work the with the `saveAs` parameter set to `true`, but now it is not available at all.)

This means that the addon does not function at all.
