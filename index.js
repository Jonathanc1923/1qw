const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Establece la carpeta "views" como la ubicación de las vistas HTML
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Usaremos EJS, por lo que configura el motor de vistas

// Configuración para servir archivos estáticos desde la carpeta "static"
app.use('/static', express.static('static'));

// Usuarios válidos (esto es solo un ejemplo, debes almacenar los usuarios de manera segura)
const usuariosValidos = [
  { correo: 'digital1@gmail.com', contraseña: 'digital1' }
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/inicio.html');
});

app.post('/inicioproyecto', (req, res) => {
  const correo = req.body.correo;
  const contraseña = req.body.contraseña;

  // Verifica las credenciales del usuario
  const usuarioValido = usuariosValidos.find(
    (usuario) => usuario.correo === correo && usuario.contraseña === contraseña
  );

  if (usuarioValido) {
    // Si las credenciales son válidas, redirige al cliente a "inicioproyecto"
    res.redirect('/inicioproyecto');
  } else {
    // Si las credenciales no son válidas, muestra un mensaje de error o redirige a otra página
    res.redirect('/inicio');
    res.send('Credenciales incorrectas. Inténtalo de nuevo. Solo instroduzca el correo y contraseña que el asesor le brindó');
    
  }
});

app.get('/inicioproyecto', (req, res) => {
  res.sendFile(__dirname + '/views/inicioproyecto.html');
});

app.get('/inicio', (req, res) => {
  res.sendFile(__dirname + '/views/inicio.html');
});


app.get('/disenar-para-1', (req, res) => {
  res.sendFile(__dirname + '/views/disenar-para-1.html');
});
app.get('/disenar-para-2', (req, res) => {
  res.sendFile(__dirname + '/views/disenar-para-2.html');
});
app.get('/disenar-para-3', (req, res) => {
  res.sendFile(__dirname + '/views/disenar-para-3.html');
});
app.get('/disenar-para-4', (req, res) => {
  res.sendFile(__dirname + '/views/disenar-para-4.html');
});
app.get('/postales', (req, res) => {
  res.sendFile(__dirname + '/views/postales.html');
});

app.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});
