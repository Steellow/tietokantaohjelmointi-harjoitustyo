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
values("Test post?", "Is this even working?");

INSERT INTO post(title, body)
values("ʕ•́ᴥ•̀ʔっ", "👊 wins ✂, ✂ wins 📄, 📄 wins 👊");

-- Create sample comments

INSERT INTO comment(postId, body)
values(1, "Maaaan that's so cool 🤩");

INSERT INTO comment(postId, body)
values(1, "Lol are you serious?");

INSERT INTO comment(postId, body)
values(3, "Yeah but 🔫 beats them all!");

