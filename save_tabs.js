function mainAction() {
  var querying = browser.tabs.query({});
  querying.then(saveTabs, onError);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function saveTabs(tabs) {
  var allTabs = [];
  for (let tab of tabs) {
    // tab.url and tab.title require the `tabs` permission
    var tabInfo = {
      "title" : tab.title,
      "url" : tab.url,
    };
    allTabs.push(tabInfo)
  }
  var tabCount = allTabs.length;
  var now = new Date();
  var metaData = {
    "tabCount" : tabCount,
    "dateString" : now.toString(),
    "ISOString" : now.toISOString(),
    "localeString" : now.toLocaleString(),
    "JSONString" : now.toJSON(),
    "getTime" : now.getTime(),
  };
  var allInfo = {
    "metadata" : metaData,
    "tabs" : allTabs
  };
  function getFilename(timestamp) {
    filename = "tabs_" + timestamp.getTime() + ".json"
    return filename
  }
  var payload = JSON.stringify(allInfo, null, 2);
  var paylodBlob = new Blob([payload], {type: 'text/plain'});
  var payloadURL = URL.createObjectURL(paylodBlob);
  var payload_filename = getFilename(now);
  var downloading = browser.downloads.download({
    url: payloadURL,
    filename : payload_filename,
    conflictAction: 'uniquify',
    saveAs: false,
  });
  // Firefox for Android raises an error if `saveAs` is set to `true`.
  // The parameter is ignored when `saveAs` is `false` or not included.
}

browser.browserAction.onClicked.addListener(mainAction);
