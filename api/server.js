const Express = require('express');

const app = new Express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({
  origin: '*',
  exposedHeaders: 'Authorization',
  methods: ['GET', 'POST']
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let data = [];

app.post('/', (req, res) => {
  data = req.body;
  res.send('OK');
});

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(5000);
