---
layout: null
---
// Configure constants
let enter_valid_email = "{{ site.data.i18n.common.contact-form[site.lang].six-contacts.enter-valid-email.title }}";
let message_title = "{{ site.data.i18n.common.pages[site.lang].message.title }}";
let required_field = "{{ site.data.i18n.common.contact-form[site.lang].six-contacts.required-field.title }}";

function activateAlertClass(alertType, alertMsg){
	document.getElementById("six_status").classList.remove("alert");
	document.getElementById("six_status").classList.remove("alert-info");
	document.getElementById("six_status").classList.remove("alert-success");
	document.getElementById("six_status").classList.remove("alert-danger");

	document.getElementById("six_status").classList.add("alert");
	document.getElementById("six_status").classList.add(alertType);
	document.getElementById('six_status').innerHTML = alertMsg;
}

function IsValidateEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
  return reg.test(email);
}

function send_mail(){
  // Initialize variables
  var flag = true;
  container = document.getElementById('conteiner');
  inputs = container.getElementsByTagName('input');

  // Clean validation messages
  document.getElementById('six_message').innerHTML = "";
  for (index = 0; index < inputs.length; ++index){
    if (inputs[index].type!="submit" && inputs[index].type!="hidden" && inputs[index].name!="_gotcha"){
      document.getElementById('six_' + inputs[index].id).innerHTML = "";
    }
  }

  // Validate email
  email = document.getElementById('email').value;
  if(!IsValidateEmail(email)){
    document.getElementById('six_email').innerHTML = enter_valid_email;
    flag = false;
  }

  // Validate inputs
  for (index = 0; index < inputs.length; ++index){
    if (inputs[index].type!="submit" && inputs[index].type!="hidden" && inputs[index].name!="_gotcha"){
      value = inputs[index].value;
      if(!(value.replace(/\s+/g, '').length && value != inputs[index].name)) {
        document.getElementById('six_' + inputs[index].id).innerHTML = required_field;
        flag = false;
      }
    }
  }

  // Validate textarea
  message = document.getElementById('message').value;
  if(!(message.replace(/\s+/g, '').length && message != message_title )) {
    document.getElementById('six_message').innerHTML = required_field;
    flag = false;
  }

  return flag;
}
