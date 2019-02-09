<script type="text/javascript">

  let response = new URL(window.location.href).searchParams.has("response");
  document.getElementById(response ? 'form-request' : 'form-response').classList.add("d-none");
  document.getElementById(response ? 'progressive-progress-navbar' : 'form-response').classList.add("d-none");

  statusText = document.getElementById('progress-bar-status');
  formInputs = document.querySelectorAll("[required]");
  progressBar = document.getElementById('progressive-progress-bar');

  progressBar.style.width = "1%";
  progressBar.innerHTML = "1%";
  statusText.innerHTML = "1%";

  for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", updateProgressBar);
  }

  function updateProgressBar() {
    progressBar.value = 0;
    for (var i = 0; i < formInputs.length; i++) {
      if ( formInputs[i].value != '' ){
        progressBar.value += 100/formInputs.length;
      }
    }
    progressBar.style.width = progressBar.value + "%";
    progressBar.innerHTML = Math.round(progressBar.value) + "%";
    statusText.innerHTML = Math.round(progressBar.value) + "%";
  }

</script>
