$(function() {

	console.log("Loading flights");

	function loadFlights() {
	$.getJSON("/api/flights/", function(flights) {
		console.log(flights);
		var message = "No flights attended";
		if(flights.length > 0 ) {
			message = "Depart from [" + flights[0].departureLocation + "] to [" + flights[0].arrivalLocation + "]";
		}
		$(".flight").text(message);
	})};
	
	loadFlights();
	
	setInterval(loadFlights, 2000);
	
});	