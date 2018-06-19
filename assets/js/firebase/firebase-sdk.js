---
layout: null
---
// Configure constants
let welcome = "{{ site.data.i18n.common.firebase[site.lang].welcome.title }}";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDNoePwIZtVOx3jHE9S9Sw4OidZoVOvb68",
  authDomain: "grupopv-mx-firebase.firebaseapp.com",
  databaseURL: "https://grupopv-mx-firebase.firebaseio.com",
  projectId: "grupopv-mx-firebase",
  storageBucket: "grupopv-mx-firebase.appspot.com",
  messagingSenderId: "424052904452"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var firestoredb = firebase.firestore();
