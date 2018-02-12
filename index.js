$('#btn_for_accordion').on('click', function() {
    chrome.tabs.executeScript( { file:'jquery.min.js'}, function() {
        chrome.tabs.executeScript(  {file: "content.js"})
    });
});
