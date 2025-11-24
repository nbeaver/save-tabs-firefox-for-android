- [ ] Remove `browser.downloads.download` as this no longer works
  - [ ] Instead maybe use `document.createElement('a').click()`?
  https://stackoverflow.com/questions/4845215/making-a-chrome-extension-download-a-file
  https://stackoverflow.com/questions/4771758/how-to-generate-a-file-for-download-in-a-google-chrome-extension
  https://stackoverflow.com/questions/15628485/save-content-to-a-file-in-chrome-extension
  https://stackoverflow.com/questions/28378708/creating-downloading-a-html-file-with-a-chrome-extension
- [x] Find a public domain icon.
- [ ] Switch to HTML output (like exporting bookmarks as HTML)
    - Use the [description list element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
    - <https://support.mozilla.org/en-US/kb/import-bookmarks-html-file>
    - [NETSCAPE-Bookmark-file-1](http://fileformats.archiveteam.org/wiki/Netscape_bookmarks)
    - <https://gist.github.com/jgarber623/cdc8e2fa1cbcb6889872>
    - Also include a naked link for easy Ctrl-F searching.
- [x] Figure out why most tabs are inaccessible to `tabs` webextension API
   - [x] https://bugzilla.mozilla.org/show_bug.cgi?id=1999408
- [x] Figure out why most tabs have the URL `about:blank`
  - [x] https://bugzilla.mozilla.org/show_bug.cgi?id=1578292
- [ ] Exclude private tabs
- [ ] Add a configuration option to save current window instead of all tabs.
    - Is this useful on Android?
