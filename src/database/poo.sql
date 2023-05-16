-- Active: 1682721353158@@127.0.0.1@3306


CREATE TABLE users(
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL, 
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
 );
SELECT * FROM users;

DROP TABLE users;

INSERT INTO users (id, name, email, password)
VALUES
	("u001", "Fulano", "fulano@email.com", "fulano123"),
	("u002", "Beltrana", "beltrana@email.com", "beltrana00");



CREATE TABLE post(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    content TEXT NOT NULL,
    likes INTEGER DEFAULT (0) NOT NULL,
    dislikes INTEGER DEFAULT (0) NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    update_at TEXT DEFAULT (DATETIME()) NOT NULL,
    creator_id TEXT NOT NULL,
    creator_name TEXT NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id)
    FOREIGN KEY (creator_name) REFERENCES users (id)
);


SELECT * FROM post;

DROP TABLE post;


    INSERT INTO post (id, creator_id , creator_name)
    VALUES
	("p001", "u001", "Fulano"),
	("p002", "u002", "Beltrana");


