-- DROP TABLE IF EXISTS buildouts;
CREATE TABLE IF NOT EXISTS buildouts (
  id SERIAL PRIMARY KEY,
  ownerId INTEGER,
  buildout_name TEXT,
  buildout_urls TEXT,
  FOREIGN KEY (ownerId) REFERENCES users(id)
);
