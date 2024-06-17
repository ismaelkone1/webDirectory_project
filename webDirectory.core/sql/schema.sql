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
  libelle varchar(128),
  etage smallint,
  description varchar(512)
);

CREATE TABLE utilisateur (
  id VARCHAR(40) PRIMARY KEY,
  mail VARCHAR(128),
  mdp VARCHAR(512),
  role INT,
  activation_token VARCHAR(128),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE telephone ADD FOREIGN KEY (id_entree) REFERENCES entree (id);

ALTER TABLE entree_service ADD FOREIGN KEY (id_entree) REFERENCES entree (id);

ALTER TABLE entree_service ADD FOREIGN KEY (id_service) REFERENCES service (id);