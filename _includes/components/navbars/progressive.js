<script type="text/javascript">
  function goToSparesUrl(){
    esMxUrl = '{{ site.data.menus.common[0].spares.esMxUrl }}'
    enUsUrl = '{{ site.data.menus.common[0].spares.enUsUrl }}'
    ptBrUrl = '{{ site.data.menus.common[0].spares.ptBrUrl }}'

    currentLang = document.getElementsByTagName("html")[0].getAttribute("lang");

    if (currentLang == 'en') {
      window.location.href = enUsUrl;
    } else if (currentLang == 'es') {
      window.location.href = esMxUrl;
    } else {
      window.location.href = ptBrUrl;
    }

  }
</script>
