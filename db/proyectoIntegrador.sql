-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 18-06-2024 a las 03:20:26
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoIntegrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_productos` int(10) UNSIGNED DEFAULT NULL,
  `id_usuarios` int(10) UNSIGNED DEFAULT NULL,
  `comentario` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_productos`, `id_usuarios`, `comentario`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, 'Muy buena calidad.', '2024-04-10 22:15:15', '2024-06-14 23:32:10', '2024-06-14 23:32:10'),
(2, 1, 2, 'Volvería a comprar definitivamente.', '2024-04-10 22:15:15', '2024-06-14 23:32:30', '2024-06-14 23:32:30'),
(3, 1, 3, 'Recomiendo totalmente.', '2024-04-10 22:15:15', '2024-06-14 23:32:40', '2024-06-14 23:32:40'),
(4, 2, 4, 'Muy buen calce.', '2024-04-10 22:15:15', '2024-06-14 23:32:52', '2024-06-14 23:32:52'),
(5, 2, 5, 'Me quedó perfecto.', '2024-04-10 22:15:15', '2024-06-14 23:33:01', '2024-06-14 23:33:01'),
(6, 2, 1, 'Muy buen calidad.', '2024-04-10 22:15:15', '2024-06-14 23:33:07', '2024-06-14 23:33:07'),
(7, 3, 2, 'Recomiendo totalmente.', '2024-04-10 22:15:15', '2024-06-14 23:33:31', '2024-06-14 23:33:31'),
(8, 3, 3, 'Volvería a comprar definitivamente.', '2024-04-10 22:15:15', '2024-06-14 23:33:38', '2024-06-14 23:33:38'),
(9, 3, 4, 'Muy suave el material. Me encanta.', '2024-04-10 22:15:15', '2024-06-14 23:33:49', '2024-06-14 23:33:49'),
(10, 4, 5, 'Hermosa estampa.', '2024-04-10 22:15:15', '2024-06-14 23:34:01', '2024-06-14 23:34:01'),
(11, 4, 1, 'Muy buena calidad.', '2024-04-10 22:15:15', '2024-06-14 23:34:06', '2024-06-14 23:34:06'),
(12, 4, 2, 'Volvería a comprar definitivamente.', '2024-04-10 22:15:15', '2024-06-14 23:34:13', '2024-06-14 23:34:13'),
(13, 5, 3, 'La mejor calidad.', '2024-04-10 22:15:15', '2024-06-14 23:34:19', '2024-06-14 23:34:19'),
(14, 5, 4, 'Muy sofisticado.', '2024-04-10 22:15:15', '2024-06-14 23:34:33', '2024-06-14 23:34:33'),
(15, 5, 5, 'Lo más hermoso que compré.', '2024-04-10 22:15:15', '2024-06-14 23:34:40', '2024-06-14 23:34:40'),
(16, 6, 1, 'Muy buena calidad.', '2024-04-10 22:15:15', '2024-06-14 23:34:48', '2024-06-14 23:34:48'),
(17, 6, 2, 'Recomiendo.', '2024-04-10 22:15:15', '2024-06-14 23:34:58', '2024-06-14 23:34:58'),
(18, 6, 3, 'Volvería a comprar.', '2024-04-10 22:15:15', '2024-06-14 23:35:04', '2024-06-14 23:35:04'),
(19, 7, 4, 'Muy lindo color.', '2024-04-10 22:15:15', '2024-06-14 23:35:11', '2024-06-14 23:35:11'),
(20, 7, 5, 'Calce perfecto.', '2024-04-10 22:15:15', '2024-06-14 23:35:18', '2024-06-14 23:35:18'),
(21, 7, 1, 'La mejor calidad.', '2024-04-10 22:15:15', '2024-06-14 23:35:25', '2024-06-14 23:35:25'),
(22, 8, 2, 'Muy lindo color.', '2024-04-10 22:15:15', '2024-06-14 23:35:34', '2024-06-14 23:35:34'),
(23, 8, 3, 'Recomiendo totalmente.', '2024-04-10 22:15:15', '2024-06-14 23:35:41', '2024-06-14 23:35:41'),
(24, 8, 4, 'Muy buena calidad.', '2024-04-10 22:15:15', '2024-06-14 23:35:48', '2024-06-14 23:35:48'),
(25, 9, 5, 'Muy sofisticado.', '2024-04-10 22:15:15', '2024-06-14 23:36:06', '2024-06-14 23:36:06'),
(26, 9, 1, 'La mejor calidad.', '2024-04-10 22:15:15', '2024-06-14 23:36:11', '2024-06-14 23:36:11'),
(27, 9, 2, 'Muy fino.', '2024-04-10 22:15:15', '2024-06-14 23:36:18', '2024-06-14 23:36:18'),
(28, 10, 3, 'Me encantó el material.', '2024-04-10 22:15:15', '2024-06-14 23:36:24', '2024-06-14 23:36:24'),
(29, 10, 4, 'Recomiendo.', '2024-04-10 22:15:15', '2024-06-14 23:36:30', '2024-06-14 23:36:30'),
(30, 10, 5, 'Volvería a comprar.', '2024-04-10 22:15:15', '2024-06-14 23:36:38', '2024-06-14 23:36:38');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `imagen` text NOT NULL,
  `nombre` text NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `id_usuarios` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `imagen`, `nombre`, `descripcion`, `created_at`, `updated_at`, `deleted_at`, `id_usuarios`) VALUES
(1, '/images/products/remera.png', 'Remera', 'Remera Nike sportswear unisex algodón 100%', '2024-04-10 22:15:15', '2024-06-14 14:26:29', '2024-06-14 14:26:29', 1),
(2, '/images/products/jean.png', 'Jean', 'Mom jeans denim azul oscuro.', '2024-04-10 22:15:15', '2024-06-14 14:26:58', '2024-06-14 14:26:58', 2),
(3, '/images/products/buzo.png', 'Buzo', 'Buzo tipo hoodie blanco algodón 100%', '2024-04-10 22:15:15', '2024-06-14 14:27:27', '2024-06-14 14:27:27', 3),
(4, '/images/products/babytee.png', 'Top', 'Top blanco y rosa con estampa 100% algodón.', '2024-04-10 22:15:15', '2024-06-14 14:27:34', '2024-06-14 14:27:34', 4),
(5, '/images/products/pollera.png', 'Pollera', 'Pollera denim upcycling reversionado.', '2024-04-10 22:15:15', '2024-06-14 14:27:42', '2024-06-14 14:27:42', 5),
(6, '/images/products/campera.png', 'Campera', 'Campera negra puffer de The North Face.', '2024-04-10 22:15:15', '2024-06-14 14:27:51', '2024-06-14 14:27:51', 1),
(7, '/images/products/musculosa.png', 'Musculosa', 'Musculosa básica negra morely.', '2024-04-10 22:15:15', '2024-06-14 14:27:58', '2024-06-14 14:27:58', 2),
(8, '/images/products/parachutte.png', 'Parachuttes', 'Pantalón parachutte verde militar.', '2024-04-10 22:15:15', '2024-06-14 14:28:06', '2024-06-14 14:28:06', 3),
(9, '/images/products/blazer.png', 'Saco', 'Saco negro de vestir.', '2024-04-10 22:15:15', '2024-06-14 14:28:22', '2024-06-14 14:28:22', 4),
(10, '/images/products/bermuda.png', 'Bermuda', 'Bermuda de jean azul.', '2024-04-10 22:15:15', '2024-06-14 14:28:30', '2024-06-14 14:28:30', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(60) NOT NULL,
  `contrasenia` varchar(100) DEFAULT NULL,
  `fecha` date NOT NULL,
  `dni` int(11) NOT NULL,
  `foto` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `username` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `contrasenia`, `fecha`, `dni`, `foto`, `created_at`, `updated_at`, `deleted_at`, `username`) VALUES
(1, 'martinaperez@gmail.com', 'martina2004', '2004-02-26', 46442731, '/images/users/user1.png', '2024-04-10 22:15:15', '2024-06-10 14:35:19', '2024-06-10 14:35:19', 'martinaperez'),
(2, 'matiasfernandez@gmail.com', 'mati2499', '2002-07-12', 44289064, '/images/users/user2.png', '2024-04-10 22:15:15', '2024-06-10 14:35:56', '2024-06-10 14:35:56', 'matiasfernandez'),
(3, 'karinarodriguez@gmail.com', 'jack2019', '1974-04-10', 23522718, '/images/users/user3.png', '2024-04-10 22:15:15', '2024-06-10 14:36:12', '2024-06-10 14:36:12', 'karinarodriguez'),
(4, 'omardiaz@gmail.com', '1970omi', '1972-11-02', 22290456, '/images/users/user4.png', '2024-04-10 22:15:15', '2024-06-10 14:36:26', '2024-06-10 14:36:26', 'omardiaz'),
(5, 'estimiedziak@gmail.com', '183km/h208feline', '2004-02-26', 46352190, '/images/users/user5.png', '2024-04-10 22:15:15', '2024-06-10 14:36:58', '2024-06-10 14:36:58', 'estimiedziak');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_productos` (`id_productos`),
  ADD KEY `id_usuarios` (`id_usuarios`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuarios` (`id_usuarios`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
