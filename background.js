chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true } }, { urls: ["*://*.zedo.com/*", "*://*.scorecardresearch.com/*"] }, ["blocking"]

)