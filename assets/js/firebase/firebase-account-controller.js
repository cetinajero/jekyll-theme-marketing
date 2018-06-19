---
layout: null
---
firebaseAuthAccountApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      user.getIdToken().then(function(accessToken) {
        setSidenavHeaderData(user);
        let photoURL = 'https://www.gravatar.com/avatar/' + md5(user.email) + '?s=70&d=identicon';
        firebase.auth().currentUser.updateProfile({
          'photoURL': photoURL
        });
      });
    } else {
      // User is signed out.
      window.location.href = "/login/?mode=select&signInSuccessUrl=/account/";
    }
  }, function(error) {
    console.log(error);
  });
};

firestoreAccountApp = function() {
  const docRef = firestoredb.doc("exchange-rates/usd");
  const usdSell = document.querySelector("#sell-usd-exchange-rates2");
  const usdUpdatedAt = document.querySelector("#updated-at-usd-exchange-rates2");

  docRef.onSnapshot(function (doc){
    if (doc && doc.exists) {
      const data = doc.data();
      usdSell.innerText = "USD: " + data.sell.toFixed(2);
      usdUpdatedAt.innerText = parseDate(new Date(data.updated_at));
    }
  });
}

window.addEventListener('load', function() {
  firebaseAuthAccountApp()
});

firestoreAccountApp();
