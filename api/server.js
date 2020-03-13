const Express = require('express');

const app = new Express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database.js');

app.use(cors({
  origin: '*',
  exposedHeaders: 'Authorization',
  methods: ['GET', 'POST'],
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const checkData = b => new Promise((res, rej) => {
  if (!Array.isArray(b)) {
    rej(`${JSON.toString(b)} is not an array.`);
  }
  for (let i = 0; i < b.length; i += 1) {
    if (!(typeof b[i].completed === 'boolean' && typeof b[i].name === 'string')) {
      rej(`${JSON.toString(b[i])} has bad format.`);
    }
  }
  res(b);
});

app.post('/', (req, res) => {
  const b = req.body;
  checkData(b).then(() => {
    db.truncateData().then(() => {
      for (let i = 0; i < b.length; i += 1) {
        db.insertData(i, b[i]);
      }
    });
    res.send('OK');
  }).catch((v) => {
    res.status(404).send(`${v}`);
  });
});

app.get('/', (req, res) => {
  db.selectData().then((v) => {
    res.send(v.rows);
  });
});

app.listen(5000);
