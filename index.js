const express = require('express');
const app = express();

// Middleware para manejar JSON
app.use(express.json());

// Middleware para manejar datos URL-encoded (si estás usando formularios)
app.use(express.urlencoded({ extended: true }));

app.post('/img/', (req, res) => {
  console.log('req', req.body.image);
  const base64Image = req.body.image;

  // Verificar que la imagen base64 esté presente y sea un string
  if (!base64Image || typeof base64Image !== 'string') {
    return res.status(400).json({ message: 'Imagen inválida o no proporcionada' });
  }
  console.log('imagen recibida:', base64Image)

  // Responder con un mensaje simple
  res.json({ message: 'Imagen recibida correctamente' });
 
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
