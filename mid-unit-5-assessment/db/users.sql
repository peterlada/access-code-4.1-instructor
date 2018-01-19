DROP DATABASE IF EXISTS userlist;
CREATE DATABASE userlist;

\c userlist;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  likesicecream BOOLEAN
);

INSERT INTO users (username, likesicecream)
  VALUES ('Tyler', false), ('Shannon', true), ('Richard', true);
