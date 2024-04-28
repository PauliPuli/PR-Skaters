import path from "path";
const __dirname = import.meta.dirname;
import jwt from "jsonwebtoken";
import pool from "../config/skateDb.js";
process.loadEnvFile();
import {
  addParticipante,
  getParticipantes,
} from "../queries/user.consultas.js";


//llamada a página principal de la plantilla✅
export const home = async(req,res)=>{
  const skaters= await getParticipantes();
  res.render("Home", {skaters});
};

export const login = (req,res)=>{
  res.render("Login", {
      title: 'Iniciar Sesión - Skate Stgo 2024',
    IniciarSesion: [
    ],
  });
};

export const registro = async(req,res)=>{  
  res.render("Registro", {registro});
};
// const skater=asyn(req,res)=>{
//   res.render("Registro", {registro});
// }
const  registros= await addParticipante()


export const admin = (req,res)=>{
  res.render("Admin", {
      title: 'Admin - Skate Stgo 2024',
    IniciarSesion: [
    ],
  });
};

export const perfil = (req,res)=>{
  res.render("Perfil", {
      title: 'Perfil - Skate Stgo 2024',
    IniciarSesion: [
    ],
  });
};