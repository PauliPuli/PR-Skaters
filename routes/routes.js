import express from "express";
const router = express.Router();
import { home, login,registro, admin,perfil} from "../controllers/skate.controllers.js";

router.get('/',home);//devuelve el registro de los participantes

router.get('/registro', registro);//formulario de inscripción
router.post('/skaters', registro);
router.get('/login',login);
router.get('/admin',admin);
router.get('/perfil',perfil);

// router.post('/skaters',agregarParticipante);
// router.get('/',verParticipantes)

export default router