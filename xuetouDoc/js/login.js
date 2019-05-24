

$('#loginBtn').click(function() {
	var userName = $('#userName').val();
	var passWord = $('#passWord').val();
	$.ajax({
		type: 'POST',
		url: '',
		data: {
			'userName': userName,
			'passWord': passWord
		},
		dataType: 'json',
		success: function() {

		}
	})
});
