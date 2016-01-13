$(document).ready(function() {
	navBar()
	footer()
})

function navBar() {
	$.get("includes/navbar.html", function(data) {
		$("body").prepend(data);
		
		if(location.pathname.includes("about")) $("#aboutTab").addClass("active")
		else if(location.pathname.includes("robots")) $("#robotsTab").addClass("active")
		else if(location.pathname.includes("outreach")) $("#outreachTab").addClass("active")
	});
}

function footer() {
	$.get("includes/footer.html", function(data) {
		$("body").append(data);
	});
}