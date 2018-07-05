---
layout: null
---
// Configure constants
//// Email
let user = {{ site.formspree.contact-form.email.user }};
let company = {{ site.formspree.contact-form.email.company }};
let global_domain = {{ site.formspree.contact-form.email.global_domain }};
//// i18n
let fill_fields = "{{ site.data.i18n.common.contact-form[site.lang].formspree.fill-fields.title }}";
let message_sent = "{{ site.data.i18n.common.contact-form[site.lang].formspree.message-sent.title }}";
let sending_error = "{{ site.data.i18n.common.contact-form[site.lang].formspree.sending-error.title }}";
let sending_message = "{{ site.data.i18n.common.contact-form[site.lang].formspree.sending-message.title }}";

var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	if(send_mail()){
		e.preventDefault();
		jQuery.ajax({
			url: '//formspree.io/' + user + '@' + company + '.' + global_domain,
			method: 'POST',
			data: jQuery(this).serialize(),
			dataType: 'json',
			beforeSend: function() {
				$contactForm.find('#sp_qc_submit').hide();
				activateAlertClass("alert-info", sending_message );
			},
			success: function(data) {
				setTimeout(function(){
					activateAlertClass("alert-success", message_sent );
				}, 1500);
			},
			error: function(err) {
				setTimeout(function(){
					if(err.responseJSON.error == "To prevent spam, only Gold accounts may create AJAX forms."){
						console.log("This form doesn't support AJAX, switching to POST instead...");
						$contactForm.attr('action', '//formspree.io/' + user + '@' + company + '.' + global_domain);
						$contactForm.unbind().submit();
					}else{
						activateAlertClass("alert-danger", sending_error );
						console.log(err.responseJSON);
					}
				}, 1500);
			}
		});
	} else{
		e.preventDefault();
		activateAlertClass("alert-danger", fill_fields );
	}
});
