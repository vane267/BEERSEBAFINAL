--FRANK
--SHOW TABLES 
--SELECT FROM*USUARIOS

--SELECT * FROM compra;
SELECT u.apellido,
    c.fechahora,
    c.estado
FROM compra c 
INNER JOIN USUARIOS u ON u.id = c.id_usuario;
--SARA
SHOW DATABASES;
 USE beerseba;
  
SHOW TABLES;
 SELECT * FROM usuarios;

