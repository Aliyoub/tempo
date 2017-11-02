const axios = require('axios');

function myIpContent() {
	$('#valider').on('click', function(){
		var myIpContent ="";
		myUrl = $('#url').val();
	    
	    let uri = 'https://dns.google.com/resolve?name=' + myUrl;   
		axios.get(uri).then(response => {
			document.getElementById('myIpContent').innerHTML = response.data.Answer[0].data;
	    });   
	})     
}
module.exports = myIpContent;
