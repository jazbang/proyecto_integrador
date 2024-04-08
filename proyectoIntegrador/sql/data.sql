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
VALUES(DEFAULT, 'martinaperez@gmail.com', 'martina2004', '2004-02-26', 46442731, 'file:///var/folders/x_/fjxqkm4d7zz4f1vr4k3wccd40000gn/T/TemporaryItems/NSIRD_screencaptureui_n2B35S/Captura%20de%20pantalla%202024-04-08%20a%20las%2017.32.53.png', NULL, NULL, NULL);

INSERT INTO usuarios
VALUES(DEFAULT, 'matiasfernandez@gmail.com', 'mati2499', '2002-07-12', 44289064, 'file:///var/folders/9l/ngx1v7v17x76cy3h1yk5bw1r0000gn/T/TemporaryItems/NSIRD_screencaptureui_RSnJjt/Captura%20de%20pantalla%202024-04-08%20a%20la(s)%2017.37.52.png', NULL, NULL, NULL);

INSERT INTO usuarios
VALUES(DEFAULT, 'karinarodriguez@gmail.com', 'jack2019', '1974-04-10', 23522718, 'file:///var/folders/9l/ngx1v7v17x76cy3h1yk5bw1r0000gn/T/TemporaryItems/NSIRD_screencaptureui_SeTzjm/Captura%20de%20pantalla%202024-04-08%20a%20la(s)%2017.38.28.png', NULL, NULL, NULL);

INSERT INTO usuarios
VALUES(DEFAULT, 'omardiaz@gmail.com', '1970omi', '1972-11-02', 22290456, 'file:///var/folders/9l/ngx1v7v17x76cy3h1yk5bw1r0000gn/T/TemporaryItems/NSIRD_screencaptureui_aZv94S/Captura%20de%20pantalla%202024-04-08%20a%20la(s)%2017.42.14.png', NULL, NULL, NULL);

INSERT INTO usuarios
VALUES(DEFAULT, 'estimiedziak@gmail.com', '183km/h208feline', '2004-02-26', 46352190, 'file:///var/folders/9l/ngx1v7v17x76cy3h1yk5bw1r0000gn/T/TemporaryItems/NSIRD_screencaptureui_tGl6lp/Captura%20de%20pantalla%202024-04-08%20a%20la(s)%2017.44.12.png', NULL, NULL, NULL);

INSERT INTO productos
VALUES(DEFAULT, 'https://www.solodeportes.com.ar/remera-nike-sportswear-mujer-blanca.html', 'Remera', 'Remera Nike sportswear unisex algodón 100%', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, 'https://www.levi.com.ar/mini-mom-jeans-kids-41d524m0n0/p?idsku=12740&gad_source=1&gclid=Cj0KCQjwq86wBhDiARIsAJhuphn4Wvjx_-MXvGUxG9B-3lLki0VOYCKAQlgnDX-0cly3YTntDOjf81gaAigWEALw_wcB', 'Jean', 'Mom jeans denim azul oscuro.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, 'https://elpatiovintage.com/productos/buzo-canguro-essentials-blanco/', 'Buzo', 'Buzo tipo hoodie blanco algón 100%', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, 'https://eu.boohoo.com/hawaii-ringer-baby-tee/GZZ58700.html', 'Top', 'Top blanco y rosa con estampa 100% algodón.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, 'https://urbanamar.com.ar/productos/mini-mandy-se-despacha-el-17-02/', 'Pollera', 'Pollera denim upcycling reversionado.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, 'file:///Users/jazminbang/Desktop/Captura%20de%20pantalla%202024-04-08%20a%20las%2020.08.42.png', 'Campera', 'Campera negra puffer de The North Face.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, 'https://www.safra.store/productos/musculosa-morley-basica/', 'Musculosa', 'Musculosa básica negra morely.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, 'https://www.yesstyle.com/en/ronin-baggy-cargo-pants/info.html/pid.1115870952', 'Parachuttes', 'Pantalón parachutte verde militar.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, 'https://www.zara.com/us/en/oversized-blazer-p02753132.html?v1=324594439&v2=2352684', 'Saco', 'Saco negro de vestir.', NULL, NULL, NULL, DEFAULT);

INSERT INTO productos
VALUES(DEFAULT, 'https://www.kazuma.com.ar/productos/bermuda-jean-beagle/?variant=735770985&pf=mc&gad_source=1&gclid=Cj0KCQjwq86wBhDiARIsAJhuphnje-qWKyRg0i5sVGeDFT-w_Urlgn7XI94JpohmS4jgFbsEbrXOtSIaAl9REALw_wcB', 'Bermuda', 'Bermuda de jean azul.', NULL, NULL, NULL, DEFAULT);

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
