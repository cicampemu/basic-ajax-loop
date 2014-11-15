// AJAX script model to request and return object "name" from XML file (e.g. user > name ...) into an UL / LI
var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {

		//console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);

		// loop printing one name per li tag.
		var items = request.responseXML.getElementsByTagName('name');
		var output = '<ul>';
		for (var i = 0; i < items.length; i++) {
			output += '<li>' +  items[i].firstChild.nodeValue + '</li>';
		}
		output += '</ul>';

		//where you want to output the loop in your HTML 
		document.getElementById('update').innerHTML = output;
	}
}
request.send();
