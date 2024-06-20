create database Berries;
use Berries;

create table USUARIO(
id int primary key auto_increment not null,
usuario varchar(50) not null,
contrasena text not null,
rol varchar (10) not null
);

INSERT INTO USUARIO (usuario, contrasena,rol) VALUES
    ('user1', '1234','admin'),
    ('user2', '1234','empleado'),
    ('user3', '1234','empleado'),
    ('user4', '1234','empleado');
    
select * from USUARIO;
UPDATE USUARIO
SET usuario = 'Berrie Master',
    contrasena = 'nadiesabe',
    rol = 'admin'
WHERE id = 1; 

CREATE TABLE SALIDA (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    avatar VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    calidad VARCHAR(20) NOT NULL,
    peso INT NOT NULL,
	fecha_date DATE NOT NULL,
    fecha_time TIME NOT NULL
    
);

INSERT INTO SALIDA (avatar, nombre, calidad, peso, fecha_date, fecha_time) VALUES ('/public/Cereza.svg', 'Cereza', 'Grande', 85, '2024-01-09', '3:45');
INSERT INTO SALIDA (avatar, nombre, calidad, peso, fecha_date, fecha_time) VALUES ('/public/mango.svg', 'Mango', 'Premiun', 100, '2023-12-08', '4:45');
INSERT INTO SALIDA (avatar, nombre, calidad, peso, fecha_date, fecha_time) VALUES ('/public/frutilla.svg', 'Frutilla', 'Grande', 90, '2024-01-15', '3:45');
INSERT INTO SALIDA (avatar, nombre, calidad, peso, fecha_date, fecha_time) VALUES ('/public/Frambuesa.svg', 'Frambuesa', 'Premium', 55, '2024-01-05', '3:45');

CREATE TABLE PRODUCTO (
id int primary key auto_increment not null,
nombre varchar(100) not null,
avatar LONGBLOB
);

INSERT PRODUCTO (nombre, avatar) values (?,?)
/*aqui vamos a modificar la tbl para hacer una relacion y postriormente un join*/

CREATE TABLE SALIDA (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    producto_id INT NOT NULL,
    calidad VARCHAR(20) NOT NULL,
    peso INT NOT NULL,
    fecha_date DATE NOT NULL,
    fecha_time TIME NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES PRODUCTO(id)
);

SELECT S.id, P.nombre, P.avatar, S.calidad, S.peso, S.fecha_date, S.fecha_time
FROM SALIDA S
JOIN PRODUCTO P ON S.producto_id = P.id; /*union de tablas en un join*/