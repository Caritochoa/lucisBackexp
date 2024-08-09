const express = require('express');
const app = express();
const port = 8000;

// Define un endpoint en la ruta raíz que retorna "Hola Mundo"
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

