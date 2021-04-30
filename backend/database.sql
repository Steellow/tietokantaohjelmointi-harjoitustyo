-- Copy paste this into phpMyAdmin

DROP DATABASE IF EXISTS harjoitustyo;
CREATE DATABASE harjoitustyo;
USE harjoitustyo;

DROP USER 'harjoitustyoUser'@'localhost';
FLUSH PRIVILEGES;
CREATE USER 'harjoitustyoUser'@'localhost' IDENTIFIED BY 'tIPOgJc85ThmqgJb';
GRANT ALL PRIVILEGES ON * . * TO 'harjoitustyoUser'@'localhost';

CREATE TABLE post (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    body TEXT,
    publishdate datetime DEFAULT CURRENT_TIMESTAMP,
    editdate datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comment (
    id integer PRIMARY KEY auto_increment,
    postId integer NOT NULL,
    body TEXT,
    publishdate datetime DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(postId) REFERENCES post(id)
);

-- Create sample posts

INSERT INTO post(title, body)
values("My first blog post!", "This is my first blog post. I'm so excited!");

INSERT INTO post(title, body)
values("Test post?", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

INSERT INTO post(title, body)
values("This project", "I used React, Express, MySQL and Tailwind CSS.");

-- Create sample comments

INSERT INTO comment(postId, body)
values(1, "Maaaan that's so cool!");

INSERT INTO comment(postId, body)
values(1, "Lol are you serious?");

INSERT INTO comment(postId, body)
values(2, "I find this very interesting.");

