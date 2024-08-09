const express = require('express');
const app = express();
const port = 8000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

