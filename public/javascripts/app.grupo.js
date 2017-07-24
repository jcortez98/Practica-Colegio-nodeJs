function ajaxHelper(uri, method, data) {
  return $.ajax({
    url: uri,
    type: method,
    dataType: 'json',
    contentType: 'application/json',
    data: data ? JSON.stringify(data) : null
  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown);
  });
}

var Grupo = function() {
  var main = this;
  var grupoUri = "http://localhost:3000/api/grupo";
  main.grupos = ko.observableArray([]);

  main.getGrupo = function() {
    ajaxHelper(grupoUri, 'GET').done(function(data) {
      console.log(data);
      main.grupos(data);
    });
  }
  main.getGrupo();
}


$(document).ready(function() {
  var grupo = new Grupo();
  ko.applyBindings(grupo);
})
