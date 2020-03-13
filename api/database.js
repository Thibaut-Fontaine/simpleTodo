const { Pool } = require('pg');

const pool = new Pool({
  user: 'thibaut',
  host: 'localhost',
  database: 'digistre',
  password: 'digistre!!555',
  port: 5432,
})

const insertData = data => new Promise((resolve, reject) => {
  pool.query(
    `INSERT into todo.table values('${data.name}', '${data.completed}')`,
    (err, res) => {
      if (err) { reject(err); }
      resolve(res);
    },
  );
});

const selectData = () => new Promise((resolve, reject) => {
  pool.query(
    'SELECT * FROM todo.table',
    (err, res) => {
      if (err) { reject(err); }
      resolve(res);
    },
  );
});

const deleteData = data => new Promise((resolve, reject) => {
  pool.query(
    `DELETE FROM todo.table WHERE 'name' = '${data}'`,
    (err, res) => {
      if (err) { reject(err); }
      resolve(res);
    },
  );
});

const updateData = data => new Promise((resolve, reject) => {
  pool.query(
    `UPDATE todo.table SET 'name' = '${data}'`,
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
  deleteData
}
