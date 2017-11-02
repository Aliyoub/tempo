const axios = require('axios');

function myDnsContent() {
	$('#valider').on('click', function(){
		var myDnsContent ="";
		myUrl = $('#url').val();
	    let uri2 = 'https://dns.google.com/resolve?name=' + myUrl + '&type=CNAME'; 

	    axios.get(uri2).then(response => {
			document.getElementById('myDnsContent').innerHTML = response.data.Authority[0].data;
	    });   
	})   
}
module.exports = myDnsContent;
