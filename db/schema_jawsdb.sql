CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL, 
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Veggie Burger');
INSERT INTO burgers (burger_name) VALUES ('Mushroom Swiss Burger');
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Burger', true);