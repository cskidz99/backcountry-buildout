-- It may be helpful to drop and reinstantilize the table when doing
-- the tests in case you delete users/cars the tests are expecting to see
DROP TABLE IF EXISTS buildouts;
CREATE TABLE buildouts (
  id SERIAL PRIMARY KEY,
  ownerId INTEGER,
  buildout_name TEXT,
  buildout_urls TEXT,
  FOREIGN KEY (ownerId) REFERENCES users(id)
);
