import jwt from "jsonwebtoken";
process.loadEnvFile();

import {getParticipantes, selectParticipante} from "../queries/user.consultas.js";

export const iniciarSesion = async (req, res) => {


  try {

    const { email, password } = req.body;
    // console.log(email,password)
    const secretKey = process.env.SECRET_KEY;
    const skater = await selectParticipante(email, password);
    const token = jwt.sign(skater, secretKey, { expiresIn: "5m" });
    // console.log(token)
    res.status(200).send(token);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      error: `Algo salió mal... ${error}`,
      code: 500,
    },);
  }
};


//decodificar el token
export const validarToken = async (req, res) => {
  const { token } = req.query;
  const secretKey = process.env.SECRET_KEY;
  jwt.verify(token, secretKey, (err, skater) => {
    if (err) {
      res.status(500).send({
        error: `Algo salió mal...`,
        message: err.message,
        code: 500,
      });
    } else {
      res.render('Perfil',  {skater} );
    }
  });
};

//`<h1>⚠</h1><h2>Usuario o contraseña incorrecta</h2><a href="/"><button class="boton" type="button">Volver a inicio</button></a><style>
// * {
//   margin: 0;
//   padding: 0;
// }
// body {
//   background: #1c1c1c;
//   color: yellow;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   height: 60vh;
//   font-family: monospace
// }
// .boton{
//   margin: 10px;
//   padding: 10px;
//   background: #FFC107
// }
// </style>`
