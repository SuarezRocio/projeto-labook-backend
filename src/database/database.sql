-- Active: 1683911636274@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users (id, name, email, password, role)
VALUES
	('u001', 'Martin', 'martin@email.com', 'martin4564' ,'NORMAL'),
	('u002', 'Ana', 'ana@email.com', 'beltrana00', 'NORMAL'),
	('u003', 'Lucrecia', 'lucrecia@email.com', 'astrodev99', 'ADMIN');

DROP TABLE users;    

SELECT * FROM users;

CREATE TABLE post (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT UNIQUE NOT NULL,
    dislikes INTEGER DEFAULT (0) NOT NULL, 
    likes INTEGER DEFAULT (0) NOT NULL, 
    content TEXT NOT NULL,  
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    update_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
   );

/* ON UPDATE CASCADE
    ON DELETE CASCADE
*/
/*  dislikes INTEGER DEFAULT (0) NOT NULL, 
    likes INTEGER DEFAULT (0) NOT NULL, 
  */

SELECT * FROM post;

INSERT INTO post (id, creator_id, content)
VALUES
	('p001', 'u001','kkkkkk' ),
	('p002','u002' ,'maravilhoso :)' ),
	('p003','u003' ,'obrigado, Parabéns!'  );
    

DROP TABLE post;     

CREATE TABLE likes_dislikes (
    user_id TEXT NOT NULL, 
    post_id TEXT NOT NULL,
    likes INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES post(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
 );

/*   ON UPDATE CASCADE
    ON DELETE CASCADE
*/
SELECT * FROM likes_dislikes;

INSERT INTO likes_dislikes
(user_id, post_id, likes)
VALUES 
('u001', 'p003' , 1),
('u002', 'p001' , 2),
('u003', 'p002' , 3);


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