create database quillen_berries;

use quillen_berries;

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

SELECT* FROM USUARIO;

CREATE TABLE PRODUCTO (
id_codigo_barra bigint primary key  not null,
nombre varchar(50) not null,
avatar LONGBLOB not null,
calidad VARCHAR(20) NOT NULL
);
ALTER TABLE PRODUCTO MODIFY COLUMN id_codigo_barra BIGINT;



select * from producto;





CREATE TABLE ENTRADA(
    id int primary key auto_increment not null,
    id_codigo_barrafk bigint not null,
    estante int not null,
    fecha date not null,
    hora time not null,
    FOREIGN KEY (id_codigo_barrafk) REFERENCES PRODUCTO(id_codigo_barra)
);

CREATE TABLE SALIDA(
id int primary key auto_increment not null,
id_codigo_barrafk bigint not null,
id_empleadofk int not null,
fecha date not null,
hora time not null,
FOREIGN KEY (id_codigo_barrafk) REFERENCES PRODUCTO(id_codigo_barra),
FOREIGN KEY(id_empleadofk) REFERENCES USUARIO(id)
);

-- join para salida:
SELECT 
    S.id AS salida_id,
    P.id_codigo_barra,
    P.nombre AS producto_nombre,
    P.calidad,
    U.id AS empleado_id,
    U.usuario AS empleado_nombre,
    S.fecha,
    S.hora
FROM 
    SALIDA S
JOIN 
    PRODUCTO P ON S.id_codigo_barrafk = P.id_codigo_barra
JOIN 
    USUARIO U ON S.id_empleadofk = U.id;