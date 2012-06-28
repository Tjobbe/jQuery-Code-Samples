$(document).ready(function(){
//clear input fields for wordpress and your own text inout fields
	$("#commentform input,.wpcf7-form input, #commentform textarea, .wpcf7-form textarea").focus(function() {
		if( this.value == this.defaultValue ) {
			this.value = "";
		}
	}).blur(function() {
		if( !this.value.length ) {
			this.value = this.defaultValue;
		}
	});
});