firebase.auth().onAuthStateChanged((user) => {
  if (user) {

    function createList() {
      document.querySelector("#sign-in-content").innerHTML = `
        <h3>Mis descargas</h3>

        <div class="table-responsive px-xl-5">
          <table class="table table-striped table-hover">
            <thead class="thead-light">
              <tr>
                <th scope="col"><i class="fas fa-hashtag"></i></th>
                <th scope="col">Archivo <i class="fas fa-cloud-download-alt"></i></th>
                <th scope="col">Marca <i class="far fa-copyright"></i></th>
                <th scope="col">Tecnología <i class="fas fa-wifi fa-rotate-90"></i></th>
                <th scope="col">Categoría <i class="fas fa-th"></i></th>
              </tr>
            </thead>
            <tbody id="firebaseItemRows"></tbody>
          </table>
        </div>
      `;

      getFirebaseItems();
    }

    function getFirebaseItems() {
      firestoredb
        .collection("downloads").get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            appendAlert('No se han encontrado archivos');
          } else {
            querySnapshot.forEach((doc) => {
              appendRow(doc);
            });
          }
        })
        .catch(error => {
          switch (error.code) {
            case 'permission-denied': appendAlert('Tu usuario no cuenta con permisos para acceder a esta sección'); break;
            default:                  appendAlert(error);
          }
        });
      document.querySelector(".spinner-border").classList.add('d-none');
    }

    function appendRow(row) {
      const firebaseItemRows = document.querySelector('#firebaseItemRows');

      var newcontent = document.createElement('tbody');
      counter = document.querySelector("#firebaseItemRows").rows.length + 1
      newcontent.innerHTML = `
        <tr id="row-${counter}">
          <td>${counter}</td>
          <td><a href="${row.data().url}" title="Clic para descargar">${row.id}</a></td>
          <td>${normalizeFireBaseData(row.data().brand)}</td>
          <td>${normalizeFireBaseData(row.data().technology)}</td>
          <td>${normalizeFireBaseData(row.data().category)}</td>
        </tr>
      `;

      while (newcontent.firstChild) {
        firebaseItemRows.appendChild(newcontent.firstChild);
      }
    }

    function appendAlert(msg) {
      const firebaseItemRows = document.querySelector('header');

      var newcontent = document.createElement('alert');
      newcontent.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>¡Importante!</strong> ${msg}.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <i class="far fa-times-circle"></i>
          </button>
        </div>
      `;

      while (newcontent.firstChild) {
        firebaseItemRows.appendChild(newcontent.firstChild);
      }
    }

    function normalizeFireBaseData(data) {
      switch (data) {
        case undefined: return '';
        default:        return data;
      }
    }

    createList()

  } else {
    // User is signed out.
    const path = location.pathname.substring(1);
    window.location.href = '/login/?mode=select&signInSuccessUrl=/' + path;
  }
}, function(error) {
  console.log(error);
});
