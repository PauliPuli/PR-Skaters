import express from "express";
const router = express.Router();
import { home, login,registro,perfil} from "../controllers/render.controllers.js";
import { agregarParticipante, editarParticipante, borrarParticipante } from "../controllers/user.controllers.js";

router.get('/',home);//devuelve el registro de los participantes✅
router.get('/registro', registro);//formulario de inscripción ✅
router.post('/skaters', agregarParticipante);
router.get('/login',login);

router.get('/perfil',perfil);
router.put('/perfil', editarParticipante);
router.delete('/perfil',borrarParticipante)


export default router