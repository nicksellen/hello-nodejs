const app = require('express')();
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.status(200).send('hello');
});

app.listen(port, () => {
  console.log('listening on port', port);
});

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

