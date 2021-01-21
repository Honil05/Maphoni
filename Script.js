
(function(exports) {
    "use strict";

    document.getElementById('Buscar').addEventListener('click', function initMap() {
      
      let cedula = (document.getElementById("cedula").value);
      let latitud = parseInt(document.getElementById("latitud").value);
      let longitud = parseInt(document.getElementById("longitud").value);
      let url = "http://173.249.49.169:88/api/test/consulta/" + cedula;
      let request = new XMLHttpRequest;
      request.open('GET', url);
      request.responseType = 'json';
      request.send();
      request.onload = function (){
         const usuario = request.response;
         let nombre = usuario.Cedula + "  " + usuario.Nombres;
         var myLatLng = {
            lat: latitud,
            lng: longitud
          };
          var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: myLatLng
          });
          var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            label: nombre
          });

      }
      
      
       
    });

    exports.initMap = initMap;
  })((this.window = this.window || {}));
