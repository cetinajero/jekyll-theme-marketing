firebase.auth().onAuthStateChanged((user) => {
  if (user) {

    function createList() {
      document.querySelector("#sign-in-content").innerHTML = `
        <div class="row">
          <div class="filters col-4 col-md-3 col-xl-2"></div>

          <div class="col-8 col-md-9 col-xl-10">
            <div class="table-responsive px-xl-5">
              <table class="table table-striped table-hover">
                <thead class="thead-light">
                  <tr>
                    <th scope="col"><i class="fas fa-hashtag"></i></th>
                    <th scope="col">Archivo <i class="fas fa-cloud-download-alt"></i></th>
                    <th scope="col" class="d-none d-lg-table-cell">Marca <i class="far fa-copyright"></i></th>
                    <th scope="col" class="d-none d-lg-table-cell">Tecnología <i class="fas fa-wifi fa-rotate-90"></i></th>
                    <th scope="col" class="d-none d-lg-table-cell">Categoría <i class="fas fa-th"></i></th>
                  </tr>
                </thead>
                <tbody id="firebaseItemRows"></tbody>
              </table>
            </div>
          </div>
        </div>
      `;

      getFirebaseItems();
      getPersonalFirebaseItems();
      document.querySelector(".spinner-border").classList.add('d-none');
    }

    function getFirebaseItems() {
      firestoredb
        .collection("downloads").get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log('No se han encontrado archivos en la sección de descargas');
          } else {
            querySnapshot.forEach((doc) => {
              appendRow(doc);
            });
            {% include components/filters/isotope.js
                container="#firebaseItemRows"
                items=".firebaseItem"
                options="{ transitionDuration: 0 }"
            %}
          }
        })
        .catch(error => {
          switch (error.code) {
            case 'permission-denied': console.log('Tu usuario no cuenta con permisos para acceder a la sección de descargas'); break;
            default:                  appendAlert(error);
          }
        });
    }

    function getPersonalFirebaseItems() {
      firestoredb
        .doc("users/" + user.uid).collection("downloads").get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log('No se han encontrado archivos personales para este usuario');
          } else {
            querySnapshot.forEach((doc) => {
              appendRow(doc);
            });
          }
        })
        .catch(error => {
          switch (error.code) {
            default: appendAlert(error);
          }
        });
    }

    function appendRow(row) {
      const firebaseItemRows = document.querySelector('#firebaseItemRows');

      var newcontent = document.createElement('tbody');
      counter = document.querySelector("#firebaseItemRows").rows.length + 1
      newcontent.innerHTML = `
        <tr class="firebaseItem" id="row-${counter}">
          <td>${counter}</td>
          <td><a href="${row.data().url}" title="Clic para descargar">${row.id}</a></td>
          <td class="brand d-none d-lg-table-cell">${normalizeFireBaseData(row.data().brand)}</td>
          <td class="technology d-none d-lg-table-cell">${normalizeFireBaseData(row.data().technology)}</td>
          <td class="category d-none d-lg-table-cell">${normalizeFireBaseData(row.data().category)}</td>
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

    function createFilters() {
      isotope = document.querySelector("#isotope")
      filters = document.querySelector(".filters")
      
      while (isotope.firstChild) {
        filters.appendChild(isotope.firstChild);
      }
    }

    createFilters()

  } else {
    // User is signed out.
    const path = location.pathname.substring(1);
    window.location.href = '{{ '/login/' | relative_url }}?mode=select&signInSuccessUrl=/' + path;
  }
}, function(error) {
  console.log(error);
});
