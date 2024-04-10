CREATE DATABASE proyectoIntegrador;
USE proyectoIntegrador;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(60) NOT NULL,
contraseña VARCHAR(50) NOT NULL,
fecha DATE NOT NULL,
dni INT UNIQUE NOT NULL,
fotoPerfil TEXT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
imagen TEXT NOT NULL,
nombre TEXT NOT NULL,
descripción TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
id_usuarios INT UNSIGNED,

FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)

);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_productos INT UNSIGNED,
id_usuarios INT UNSIGNED,
comentario TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (id_productos) REFERENCES productos(id),
FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
);

INSERT INTO usuarios
VALUES(DEFAULT, 'martinaperez@gmail.com', 'martina2004', '2004-02-26', 46442731, '/images/users/user1.png', NULL, NULL, NULL);

INSERT INTO usuarios
VALUES(DEFAULT, 'matiasfernandez@gmail.com', 'mati2499', '2002-07-12', 44289064, '/images/users/user2.png', NULL, NULL, NULL);

INSERT INTO usuarios
VALUES(DEFAULT, 'karinarodriguez@gmail.com', 'jack2019', '1974-04-10', 23522718, '/images/users/user3.png', NULL, NULL, NULL);

INSERT INTO usuarios
VALUES(DEFAULT, 'omardiaz@gmail.com', '1970omi', '1972-11-02', 22290456, '/images/users/user4.png', NULL, NULL, NULL);

INSERT INTO usuarios
VALUES(DEFAULT, 'estimiedziak@gmail.com', '183km/h208feline', '2004-02-26', 46352190, '/images/users/user5.png', NULL, NULL, NULL);

INSERT INTO productos
VALUES(DEFAULT, '/images/products/remera.png', 'Remera', 'Remera Nike sportswear unisex algodón 100%', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, '/images/products/jeanMujer.png', 'Jean', 'Mom jeans denim azul oscuro.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, '/images/products/buzo.png', 'Buzo', 'Buzo tipo hoodie blanco algodón 100%', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, '/images/products/babytee.png', 'Top', 'Top blanco y rosa con estampa 100% algodón.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, '/images/products/polleraJean.png', 'Pollera', 'Pollera denim upcycling reversionado.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, '/images/products/campera.png', 'Campera', 'Campera negra puffer de The North Face.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, '/images/products/musculosa.png', 'Musculosa', 'Musculosa básica negra morely.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, '/images/products/parachutte.png', 'Parachuttes', 'Pantalón parachutte verde militar.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, '/images/products/blazer.png', 'Saco', 'Saco negro de vestir.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, '/images/products/bermuda.png', 'Bermuda', 'Bermuda de jean azul.', NULL, NULL, NULL, DEFAULT);

INSERT INTO comentarios
VALUES(DEFAULT, 1, DEFAULT, 'Muy buena calidad.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 1, DEFAULT, 'Volvería a comprar definitivamente.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 1, DEFAULT, 'Recomiendo totalmente.', NULL, NULL, NULL);

INSERT INTO comentarios
VALUES(DEFAULT, 2, DEFAULT, 'Muy buen calce.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 2, DEFAULT, 'Me quedó perfecto.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 2, DEFAULT, 'Muy buen calidad.', NULL, NULL, NULL);

INSERT INTO comentarios
VALUES(DEFAULT, 3, DEFAULT, 'Recomiendo totalmente.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 3, DEFAULT, 'Volvería a comprar definitivamente.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 3, DEFAULT, 'Muy suave el material. Me encanta.', NULL, NULL, NULL);

INSERT INTO comentarios
VALUES(DEFAULT, 4, DEFAULT, 'Hermosa estampa.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 4, DEFAULT, 'Muy buena calidad.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 4, DEFAULT, 'Volvería a comprar definitivamente.', NULL, NULL, NULL);

INSERT INTO comentarios
VALUES(DEFAULT, 5, DEFAULT, 'La mejor calidad.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 5, DEFAULT, 'Muy sofisticado.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 5, DEFAULT, 'Lo más hermoso que compré.', NULL, NULL, NULL);

INSERT INTO comentarios
VALUES(DEFAULT, 6, DEFAULT, 'Muy buena calidad.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 6, DEFAULT, 'Recomiendo.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 6, DEFAULT, 'Volvería a comprar.', NULL, NULL, NULL);

INSERT INTO comentarios
VALUES(DEFAULT, 7, DEFAULT, 'Muy lindo color.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 7, DEFAULT, 'Calce perfecto.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 7, DEFAULT, 'La mejor calidad.', NULL, NULL, NULL);

INSERT INTO comentarios
VALUES(DEFAULT, 8, DEFAULT, 'Muy lindo color.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 8, DEFAULT, 'Recomiendo totalmente.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 8, DEFAULT, 'Muy buena calidad.', NULL, NULL, NULL);

INSERT INTO comentarios
VALUES(DEFAULT, 9, DEFAULT, 'Muy sofisticado.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 9, DEFAULT, 'La mejor calidad.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 9, DEFAULT, 'Muy fino.', NULL, NULL, NULL);

INSERT INTO comentarios
VALUES(DEFAULT, 10, DEFAULT, 'Me encantó el material.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 10, DEFAULT, 'Recomiendo.', NULL, NULL, NULL);
INSERT INTO comentarios
VALUES(DEFAULT, 10, DEFAULT, 'Volvería a comprar.', NULL, NULL, NULL);
