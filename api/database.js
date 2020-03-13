const { Pool } = require('pg');

const pool = new Pool({
  user: 'x',
  host: 'localhost',
  database: 'todo',
  password: 'todo',
  port: 5432,
});

const insertData = (i, data) => new Promise((resolve, reject) => {
  pool.query(
    `INSERT into todo.list values('${i}', '${data.name}', '${data.completed}')`,
    (err, res) => {
      if (err) { reject(err); }
      resolve(res);
    },
  );
});

const selectData = () => new Promise((resolve, reject) => {
  pool.query(
    'SELECT * FROM todo.list',
    (err, res) => {
      if (err) { reject(err); }
      resolve(res);
    },
  );
});

const deleteData = i => new Promise((resolve, reject) => {
  pool.query(
    `DELETE FROM todo.list WHERE 'id' = '${i}'`,
    (err, res) => {
      if (err) { reject(err); }
      resolve(res);
    },
  );
});

const updateData = (i, data) => new Promise((resolve, reject) => {
  pool.query(
    `UPDATE todo.list SET 'name' = '${data.name}', 'completed' = '${data.completed}' WHERE id = '${i}'`,
    (err, res) => {
      if (err) { reject(err); }
      resolve(res);
    },
  );
});

const truncateData = () => new Promise((resolve, reject) => {
  pool.query(
    'TRUNCATE TABLE todo.list',
    (err, res) => {
      if (err) { reject(err); }
      resolve(res);
    },
  );
});

module.exports = {
  insertData,
  selectData,
  updateData,
  deleteData,
  truncateData,
};
