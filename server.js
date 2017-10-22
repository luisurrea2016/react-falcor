import express from 'express';
import path from 'path';

const port = 8083;
const app = express();

app.use(express.static('dist'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, error => {
  if (error) {
    console.warn(error);
  } else {
    console.info(`Running on ${port}...`);
  }
});
