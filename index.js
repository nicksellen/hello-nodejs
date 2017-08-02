const app = require('express')();
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.status(200).send('hello again');
});

app.listen(port, () => {
  console.log('listening on port', port);
});
