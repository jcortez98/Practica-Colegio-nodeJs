CREATE DATABASE Colegio;
USE Colegio;

Create Table Grupo(
idGrupo Int NOT NULL AUTO_INCREMENT,
nombre Varchar(50) not null,
seccion Varchar(20) not null,
PRIMARY KEY (idGrupo)
);

Create Table Curso(
idCurso INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(50) not null,
PRIMARY KEY (idCurso)
);

Create table DetalleCurso(
idDetalleCurso INT NOT NULL AUTO_INCREMENT,
idGrupo INT NOT NULL,
idCurso INT NOT NULL,
PRIMARY KEY (idDetalleCurso),
FOREIGN KEY (idGrupo) REFERENCES Grupo(idGrupo),
FOREIGN KEY (idCurso) REFERENCES Curso(idCurso)
);


DELIMITER $$
CREATE PROCEDURE sp_insertCurso(
IN _idGrupo INT,
IN _nombreCurso VARCHAR(20))
BEGIN
	DECLARE _idCurso INT;
	INSERT INTO Curso(nombre) VALUES(_nombreCurso);
	SET _idCurso = (SELECT MAX(idCurso) FROM Curso); 
	INSERT INTO DetalleCurso(idGrupo, idCurso) VALUES(_idGrupo, _idCurso);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE sp_insertGrupo(
IN _nombreGrupo VARCHAR(50),
IN _seccion VARCHAR(20))
BEGIN
	INSERT INTO Grupo(nombre, seccion) VALUES(_nombreCurso,_seccion);
END$$
DELIMITER ;detallecurso

call sp_insertCurso(1, 'jajaj')
