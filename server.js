const express = require ('express');
const app = express ();

const PORT = 8080;

app.get ('/', (req, res) => {
    res.send (`<h1>Bienvenidos al servidor express</h1>`)
})

let visitas = 0;
app.get ('/visitas', (req, res) => {
    res.send (`La cantidad de visitas es ${++visitas}`)
})

app.get ('/fyh', (req, res) => {
    res.send ({fyh: new Date().toLocaleDateString()})
})

const server = app.listen (PORT, () => {
    console.log (`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on ('error', error => console.log (`Este es el error ${error}`));