var val;
function obj(urls) {
    this.array = urls;
    this.count = val;
    
}

function main()
{
		console.log('Getting unread message');
		var urls = [];
		console.log($('b > a[href^="read"', window.parent.frames[1].document));
		$('b > a[href^="read"', window.parent.frames[1].document).each(function(){
			var item=$(this);
			var link=item.attr('href');
			var action_url = "Javascript:window.open(\"" + link + "\");";
			urls.push(action_url);
		});
		if(val!=0)
			refresh();
		var object = new obj(urls);  
		return object;

		
}

function refresh()
{
	setTimeout(function(){location.reload(true);}, 3000);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	//console.log("request: " + request);
	if(request === "open.unread") {
		sendResponse(main());
	}

    });

$(document).ready(add_button)

function open_tabs()
{
	//console.log('gsbgsd');
	val=window.parent.frames[1].document.getElementById("myinput").value;
	//console.log("" + val + "");
}

function add_button()
{
	//console.log("dfdfnd");
	
	$('a[href^="/plugins/notes/"', window.parent.frames[1].document).after("<input type='number' placeholder='Enter desired value' id='myinput'><button id='myinput1'>Store Value</button>");
	window.parent.frames[1].document.getElementById("myinput1").addEventListener("click",open_tabs);
	
}
