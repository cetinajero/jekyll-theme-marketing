// Response URL
const response = new URL(window.location.href).searchParams.has("response");

// Hide elements as needed
document.getElementById(response ? 'contact-form' : 'form-response').classList.add("d-none");
document.getElementById(response ? '{{ page.form.id }}' : 'form-response').classList.add("d-none")

// Define form action
document.querySelector('#contact-form').setAttribute('action', 'https://formspree.io/f/{{ page.form.forsmpree.id | default: site.formspree.id }}');

// Disable form submission if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
