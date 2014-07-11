$(document).ready(function() {
	
	$('.container').prepend('<button>New Grid</button>')

	showGrid(16);

	
	$('button').click(function() {
		var size = prompt('Enter a number');
		if (size < 90 && size > 1) {
			clearGrid();
			showGrid(size);
		}
		else {
			var size = prompt("Let's make sure that number is between one and 90. Enter a number");
			clearGrid();
			showGrid(size);
		}
	});


});

function showGrid(n) {
	

	$('.container').append('<table>');
	for (var i = 0; i < n; i++){
		$('table').append('<tr></tr>');
	}

	for (var x = 0; x < n; x++) {
		$('tr').append('<td><div class="dot"></div></td>');
	}

	$('.dot').hover(function() {
		$(this).css('background-color', '#CC99CC');
	});
};

function clearGrid() {
	$('table').remove();
};