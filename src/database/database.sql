-- Active: 1683355455639@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users (id, name, email, password, role, created_at)
VALUES
	('u001', 'Martin', 'martin@email.com', 'martin4564' ,'NORMAL' , '11/05/2023'),
	('u002', 'Ana', 'ana@email.com', 'beltrana00', 'NORMAL', '05/05/2023'),
	('u003', 'Lucrecia', 'lucrecia@email.com', 'astrodev99', 'ADMIN', '06/05/2023');

DROP TABLE users;    

CREATE TABLE post (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,  
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    update_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users(id),
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

/*  dislikes INTEGER DEFAULT (0) NOT NULL, 
    likes INTEGER DEFAULT (0) NOT NULL, 
  */

INSERT INTO post (id, creator_id, content, dislikes, likes, created_at, update_at)
VALUES
	('p001', 'kkkkkk' , '11/06/2023' , '11/06/2023' ),
	('p001', 'maravilhoso :)' , '08/08/2023' , '08/08/2023' ),
	('p001', 'obrigado, Parabéns!' , '04/10/2023' , '04/10/2023' );
    

DROP TABLE post;     

CREATE TABLE likes_dislikes (
    user_id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    playlist_id TEXT NOT NULL,
    like INTEGER NOT NULL,BIGINT
    FOREGIN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    FOREGIN KEY (playlis_id) REFERENCES playlist (id),
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

INSER INTO likes_dislikes(user_id, post_id, like)
VALUES 
('u001', 'p001' , 1),
('u002', 'p002' , 2),
('u002', 'p002' , 3);


UPDATE post 
SET likes = 2, dislikes = 0
WHERE id = 'p001';

UPDATE post
SET likes = 1, dislikes = 1 
WHERE id = 'p002';


UPDATE post
SET likes = 5, dislikes = 4 
WHERE id = 'p003';

DROP TABLE likes_dislikes