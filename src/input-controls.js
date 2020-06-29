// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

$(document).on('keypress', '.m2v-number', function(e){

    //if the letter is not digit don't type anything
	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
		return false;
	}
});

$(document).on('keypress', '.m2v-decimal', function(e){
	//if the letter is not digit don't type anything
	if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
		return false;
	}
});

$(document).on('keypress', '.m2v-alphanum', function(e){
	//if the letter is not alphabet or digit don't type anything
	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && (e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 122)) {
		return false;
	}
});

$(document).on('keyup', '.m2v-capitalize', function(){
	$(this).val($(this).val().toUpperCase());
});

$(document).on('keyup', '.m2v-camelcase', function(){
	
})