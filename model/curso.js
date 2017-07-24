var database = require('./database');
var curso = {};

curso.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM Curso",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

curso.select = function(idGrupo, callback) {
  if(database) {
    var sql = "SELECT * FROM Curso WHERE idCurso = ?";
    database.query(sql, idCurso,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

curso.insert = function(data, callback) {
  if(database) {
    database.query("call sp_insertCurso(?,?) ", [data.grupo, data.curso],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll


module.exports = curso;
