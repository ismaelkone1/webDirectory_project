CREATE TABLE entree (
  id int PRIMARY KEY AUTO_INCREMENT,
  nom varchar(128),
  prenom varchar(128),
  fonction varchar(128),
  num_bureau int,
  email varchar(64),
  url_image varchar(512)
);

CREATE TABLE telephone (
  id int PRIMARY KEY AUTO_INCREMENT,
  id_entree int,
  numero char(10)
);

CREATE TABLE entree_service (
  id_entree int,
  id_service int,
  PRIMARY KEY (id_entree, id_service)
);

CREATE TABLE service (
  id int PRIMARY KEY AUTO_INCREMENT,
  libelle varchar(128)
);

CREATE TABLE utilisateur (
  id VARCHAR(40) PRIMARY KEY,
  mail varchar(128),
  mdp varchar(512),
  role int
);

ALTER TABLE telephone ADD FOREIGN KEY (id_entree) REFERENCES entree (id);

ALTER TABLE entree_service ADD FOREIGN KEY (id_entree) REFERENCES entree (id);

ALTER TABLE entree_service ADD FOREIGN KEY (id_service) REFERENCES service (id);