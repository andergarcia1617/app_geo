import express from 'express';
import cors from 'cors'; // Importar el paquete cors
import localizacionesRoutes from './routes/localizaciones.routes.js';

const app = express();

// Configurar CORS para permitir solicitudes desde http://localhost:8100
app.use(cors({
    origin: 'http://localhost:8100', // Reemplaza con el origen de tu aplicación cliente
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

app.use(express.json());

// Rutas
app.use('/api', localizacionesRoutes);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found',
    });
});

export default app;
