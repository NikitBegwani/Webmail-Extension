



chrome.browserAction.onClicked.addListener(function(tab) {

	
	console.log(tab);
	chrome.tabs.sendMessage(tab.id, "open.unread", function(object){
		var url;
		for(url=0;url<object.count;url++) {
			if(object.array.hasOwnProperty(url)) {
				chrome.tabs.update(tab.id, {url: object.array[url]});

			}
		}
		
		
	});
	
});

function dostuff(tab)
{
	
	var action_url = "Javascript:window.open('https://www.google.co.in/');";
  
  chrome.tabs.update(tab.id, {url: action_url});
}

