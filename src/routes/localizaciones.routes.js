import { Router } from 'express';
import { 
    getLocalizaciones,
    getLocalizacionById,
    createLocalizacion,
    updateLocalizacion,
    deleteLocalizacion 
} from '../controladores/localizacionesCtrl.js';

const router = Router();

router.get('/localizaciones', getLocalizaciones);
router.get('/localizaciones/:id', getLocalizacionById);
router.post('/localizaciones', createLocalizacion);
router.put('/localizaciones/:id', updateLocalizacion);
router.delete('/localizaciones/:id', deleteLocalizacion);

export default router;
