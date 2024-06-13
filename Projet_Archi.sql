CREATE TABLE `personne` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(128),
  `prenom` varchar(128),
  `fonction` varchar(128),
  `num_bureau` int,
  `email` varchar(64),
  `url_image` varchar(512)
);

CREATE TABLE `telephone` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_personne` int,
  `numero` char(10)
);

CREATE TABLE `personne_service` (
  `id_personne` int AUTO_INCREMENT,
  `id_departement` int AUTO_INCREMENT,
  PRIMARY KEY (`id_personne`, `id_departement`)
);

CREATE TABLE `service` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `libelle` varchar(128)
);

CREATE TABLE `utilisateur` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mail` varchar(128),
  `mdp` varchar(512),
  `role` int
);

ALTER TABLE `telephone` ADD FOREIGN KEY (`id_personne`) REFERENCES `personne` (`id`);

ALTER TABLE `personne_service` ADD FOREIGN KEY (`id_personne`) REFERENCES `personne` (`id`);

ALTER TABLE `personne_service` ADD FOREIGN KEY (`id_departement`) REFERENCES `service` (`id`);
