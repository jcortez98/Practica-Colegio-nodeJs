var database = require('./database');
var grupo = {};

grupo.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM Grupo",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

grupo.select = function(idGrupo, callback) {
  if(database) {
    var sql = "SELECT * FROM Grupo WHERE idGrupo = ?";
    database.query(sql, idGrupo,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

grupo.insert = function(data, callback) {
  if(database) {
    database.query("call sp_insertGrupo(?,?) ", [data.nombre, data.seccion],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll


module.exports = grupo;
