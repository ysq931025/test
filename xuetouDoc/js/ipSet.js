function ipInputOne() {
	var inputNum = $('#ipInputOne').val();
	if (inputNum.length == 3) {
		$('#ipInputTwo').focus();
	}

}

function ipInputTwo() {
	var inputNum = $('#ipInputTwo').val();
	if (inputNum.length == 3) {
		$('#ipInputTrd').focus();
	}
}

function ipInputTrd() {
	var inputNum = $('#ipInputTrd').val();
	if (inputNum.length == 3) {
		$('#ipInputFor').focus();
	}
}

function ipInputFor() {
	var inputNum = $('#ipInputFor').val();
	if (inputNum.length == 3) {
		$('#portNum').focus();
	}
}

$('#ipSetSave').click(function() {

});
