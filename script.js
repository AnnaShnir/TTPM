$(document).ready(function() {
	$('.green').click(function() {
		alert('You have clicked the Green column!')
	});

	$('.blue').click(function() {
		var name = prompt('Enter your name:');
		console.log(name);
	});

	$('.white').click(function() {
		$('.white').animate({backgroundColor: "#DBFAFF"}, 3000);
	});
	
});
