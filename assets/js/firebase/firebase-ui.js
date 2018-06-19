// FirebaseUI config.
var uiConfig = {
  callbacks: {
    signInSuccess: function(currentUser, credential, redirectUrl) {
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered, hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInSuccessUrl: '/',
  signInOptions: [
  // Specify providers you want to offer your users.
  firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Comment the next line to activate CredentialHelper
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // Terms of service url can be specified and will show up in the widget.
  tosUrl: '{{ site.amazon-s3 }}/assets/pdf/documents/terms-and-conditions.pdf'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
