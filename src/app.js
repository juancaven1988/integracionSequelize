const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const db = require('./database/models/index')

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');
const app = express();
app.use(express.urlencoded());
app.use(express.json());


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRoutes);

app.listen('3001', async () => {
    try{
        await db.sequelize.authenticate();
        console.log("Conexion con db correcta") 
    }catch(error)
    {
        console.log("Error de conexion")
        console.log(error)
    }
    console.log('Servidor corriendo en el puerto 3001')});
