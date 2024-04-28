import path from "path";
const __dirname = import.meta.dirname;
import pool from "../config/skateDb.js";
import jwt from "jsonwebtoken";
process.loadEnvFile();
import { addParticipante } from "../queries/user.consultas.js";

import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_KEY;

export const agregarParticipante = async (req, res) => {
  const user = [
    email,
    nombre,
    password,
    anos_experiencia,
    especialidad,
    foto,
    estado,
  ];
  const { email, nombre, password, anos_experiencia, especialidad, estado } =
    req.body;
  const { foto } = req.files;
  const { name } = foto;
  foto.mv(`uploads/${name}`, (err) => {
    res.send('Usuario agregado');
  });
  const resp = await addParticipante(user);
  res.json(resp);
};

// export const iniciarSesion = (req, res) => {
//   try {
//     const { email, password } = req.query;
//     const user = agentes.find(
//       (agente) => agente.email === email && agente.password === password
//     );
//     if (user) {
//       const token = jwt.sign(user, secretKey, { expiresIn: "30s" });
//       res.send(`<a href="/Dashboard?token=${token}"> <p> Ir al Dashboard </p> </a>Bienvenido, ${email}.
//         <script>
//         sessionStorage.setItem('token', JSON.stringify("${token}"))
//         </script>
//         `);
//     } else {
//       res.status(401)
//         .send(`<h1>⚠</h1><h2>Usuario o contraseña incorrecta</h2><a href="http://localhost:3000/"><button class="boton" type="button">Volver a inicio</button></a><style>
//         * {
//           margin: 0;
//           padding: 0;
//         }
//         body {
//           background: #1c1c1c;
//           color: yellow;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: column;
//           height: 60vh;
//           font-family: monospace
//         }
//         .boton{
//           margin: 10px;
//           padding: 10px;
//           background: #FFC107
//         }
//       </style>`);
//     }
//     return user;
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "500 Internal Server Error", message: error.message });
//   }
// };
