import EMAIL_JS_ID from '/content/js/apikey.js';
(function() {
	// https://dashboard.emailjs.com/admin/integration
	emailjs.init(EMAIL_JS_ID);
})();

window.onload = function() {
	$('#chat').bind('click', function() {
		var templateParams = {
			name: '',
			email: '',
			message: ''
		};
		$('#contact-form input[name="user_name"]').on('change paste keyup', function() {
			templateParams.name = this.value;
		});
		$('#contact-form input[name="user_email"]').on('change paste keyup', function() {
			templateParams.email = this.value;
		});
		$('#contact-form textarea[name="message"]').on('change paste keyup', function() {
			templateParams.message = this.value;
		});
		document.getElementById('contact-form').addEventListener('submit', function(event) {
			console.log(templateParams);
			event.preventDefault();
			// these IDs from the previous steps
			emailjs.send('service_lfhp2ya', 'template_q76do4r', templateParams).then(
				function() {
					console.log('SUCCESS!');
				},
				function(error) {
					console.log('FAILED...', error);
				}
			);
		});
	});
};

