<script>
  // Define constants
  let menuIcon = document.querySelector('#menu')

  // Define functions for animation
  function openSideNav() { document.querySelector('.side-nav').style.transform = 'translateX(0)'; }
  function closeSideNav() { document.querySelector('.side-nav').style.transform = 'translateX(-370px)'; }

  function deactivateAllMenuItem() {
    let list = document.querySelectorAll('nav.side-bar li')
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove('active');
    }
  }

  function activateMenuItem(source) {
    deactivateAllMenuItem();
    source.classList.add('active');
  }

  // Define listeners for animation
  window.addEventListener('resize', closeSideNav)
  menuIcon.addEventListener('click', openSideNav)
  window.addEventListener('click', (e) => {
    if(e.target != menuIcon) {
       closeSideNav()
    }
  })

  // Vuejs controller function
  function setSidenavHeaderData(user) {
    let photoURL = 'https://www.gravatar.com/avatar/' + md5(user.email) + '?s=70&d=identicon';
    new Vue({
      delimiters: ['{(', ')}'],
      el: '#appVue',
      data: {
        name: user.displayName,
        email: user.email,
        photo: photoURL,
        uid: user.uid
      }
    })
  }
</script>
