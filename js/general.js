$(document).ready(function() {
	navBar()
	footer()
})

function navBar() {
	$.get("includes/navbar.html", function(data) {
	    $("body").prepend(data);
	});
}

function footer() {
	$.get("includes/footer.html", function(data) {
	    $("body").append(data);
	});
}