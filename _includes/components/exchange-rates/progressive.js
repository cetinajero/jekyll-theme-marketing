<script>
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function monthName(date, locale, type){
    name = date.toLocaleString(locale, { month: type });
    return capitalize(name);
  }

  function parseDate(date){
    return  date.getDate() + " / " +
            monthName(date, 'es-MX', "short") + " / " +
            date.getFullYear() + " " +
            ((date.getHours()%12)?(date.getHours()%12):12) + ":" +
            (date.getMinutes()<10?'0':'') + date.getMinutes() +
            (date.getHours()>=12?' PM':' AM');
  }

  getRealtimeExchangeRates = function() {
    const docRef = firestoredb.doc("exchange-rates/usd");
    const usdSell = document.querySelector("#sell-usd-exchange-rates");
    const usdUpdatedAt = document.querySelector("#updated-at-usd-exchange-rates");

    docRef.onSnapshot(function (doc){
      if (doc && doc.exists) {
        const data = doc.data();
        usdSell.innerText = "USD: " + data.sell.toFixed(2);
        usdUpdatedAt.innerText = parseDate(new Date(data.updated_at.toDate()));
      }
    });
  }

  getRealtimeExchangeRates();
</script>
