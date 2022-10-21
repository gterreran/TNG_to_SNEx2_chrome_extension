chrome.tabs.onUpdated.addListener((tabID, tab) => {
	if(tab.url && tab.url.includes("www.wis-tns.org/object")) {
		const urlElements = tab.url.split("/");
		const tns_name = urlElements[urlElements.length-1];
		
		chrome.tabs.sendMessage(tabId, {
			type: "NEW",
			objId: tns_name
		});
	}
})
