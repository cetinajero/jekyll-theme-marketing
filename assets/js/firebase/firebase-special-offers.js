---
layout: null
---
specialOffersApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var uid = user.uid;
      // var phoneNumber = user.phoneNumber;
      // var providerData = user.providerData;
      user.getIdToken().then(function(accessToken) {
        const hash = btoa(btoa(btoa(btoa(btoa('{{ 'now' | date: "%B %Y" }}')))));
        const specialOffersHTML = '{% capture html %}{% include components/firebase/special-offers.liquid %}{% endcapture %}{{ html | strip_newlines }}'.replace(/current-month-year-base64-hash/g, hash)
        document.getElementById('sign-in-content').innerHTML = specialOffersHTML;
        // document.getElementById('account-details').textContent = JSON.stringify({
        //   displayName: displayName,
        //   email: email,
        //   emailVerified: emailVerified,
        //   phoneNumber: phoneNumber,
        //   photoURL: photoURL,
        //   uid: uid,
        //   accessToken: accessToken,
        //   providerData: providerData
        // }, null, '  ');
      });
    } else {
      // User is signed out.
      window.location.href = "/login/?mode=select&signInSuccessUrl=/special-offers/";
    }
  }, function(error) {
    console.log(error);
  });
};

window.addEventListener('load', function() {
  specialOffersApp()
});
