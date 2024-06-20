CREATE TABLE entree (
  id int PRIMARY KEY AUTO_INCREMENT,
  nom varchar(128),
  prenom varchar(128),
  fonction varchar(128),
  num_bureau int,
  email varchar(64),
  url_image varchar(512),
  created_by VARCHAR(40)
);

CREATE TABLE telephone (
  id int PRIMARY KEY AUTO_INCREMENT,
  id_entree int,
  numero char(10),
  type varchar(15)
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
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE entree (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(128),
  prenom VARCHAR(128),
  fonction VARCHAR(128),
  num_bureau INT,
  email VARCHAR(64),
  url_image VARCHAR(512),
  is_published BOOLEAN DEFAULT FALSE,
  created_by VARCHAR(40),
);

CREATE TABLE telephone (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_entree INT,
  numero CHAR(10),
);

CREATE TABLE entree_service (
  id_entree INT,
  id_service INT,
  PRIMARY KEY (id_entree, id_service),
);

CREATE TABLE service (
  id INT PRIMARY KEY AUTO_INCREMENT,
  libelle VARCHAR(128),
  etage SMALLINT,
  description VARCHAR(512),
  created_by VARCHAR(40),
);

ALTER TABLE utilisateur
ADD COLUMN activation_token VARCHAR(128);

ALTER TABLE telephone
ADD CONSTRAINT fk_telephone_entree
FOREIGN KEY (id_entree) REFERENCES entree(id);

ALTER TABLE entree_service
ADD CONSTRAINT fk_entree_service_entree
FOREIGN KEY (id_entree) REFERENCES entree(id);

ALTER TABLE entree_service
ADD CONSTRAINT fk_entree_service_service
FOREIGN KEY (id_service) REFERENCES service(id);

ALTER TABLE service
ADD CONSTRAINT fk_service_utilisateur
FOREIGN KEY (created_by) REFERENCES utilisateur(id);
