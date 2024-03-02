CREATE DATABASE presentations;

CREATE TABLE IF NOT EXISTS artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(1),
    type TEXT
);

CREATE TABLE IF NOT EXISTS hirings (
    id SERIAL PRIMARY KEY,
    artist_id INTEGER REFERENCES artists(id),
    hiring_name TEXT NOT NULL,
    fee NUMERIC(10, 2),
    event_date DATE NOT NULL,
    address TEXT NOT NULL
);

SELECT * FROM artists;
SELECT * FROM hirings;

TRUNCATE TABLE artists;
TRUNCATE TABLE hirings;

DROP TABLE artists;
DROP TABLE hirings;

INSERT INTO artists (name, gender, type) VALUES ('hector', 'male', 'singer'), 
('robert', 'male', 'singer'), ('skyllet', 'n/a', 'band');

INSERT INTO hirings (artist_id, hiring_name, fee, event_date, address) 
VALUES (1, 'boss', 1500.26, '2024-02-01', 'rua alameda dos anjos');