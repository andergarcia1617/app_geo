import { conmysql } from '../db.js';

// Obtener todas las localizaciones
export const getLocalizaciones = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM localizaciones');
        res.json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al consultar localizaciones" });
    }
};

// Obtener una localización por ID
export const getLocalizacionById = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM localizaciones WHERE id = ?', [req.params.id]);
        if (result.length <= 0) {
            return res.status(404).json({ message: 'Localización no encontrada' });
        }
        res.json(result[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al consultar localización" });
    }
};

// Crear una nueva localización
export const createLocalizacion = async (req, res) => {
    try {
        const { nombre, cedula, nombres, latitude, longitude } = req.body;
        const [result] = await conmysql.query(
            'INSERT INTO localizaciones (nombre, cedula, nombres, latitude, longitude) VALUES (?, ?, ?, ?, ?)',
            [nombre, cedula, nombres, latitude, longitude]
        );
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al crear localización" });
    }
};

// Actualizar una localización
export const updateLocalizacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, cedula, nombres, latitude, longitude } = req.body;
        const [result] = await conmysql.query(
            'UPDATE localizaciones SET nombre = ?, cedula = ?, nombres = ?, latitude = ?, longitude = ? WHERE id = ?',
            [nombre, cedula, nombres, latitude, longitude, id]
        );
        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: 'Localización no encontrada' });
        }
        res.json({ message: 'Localización actualizada' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al actualizar localización" });
    }
};

// Eliminar una localización
export const deleteLocalizacion = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await conmysql.query('DELETE FROM localizaciones WHERE id = ?', [id]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: 'Localización no encontrada' });
        }
        res.json({ message: 'Localización eliminada' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al eliminar localización" });
    }
};
