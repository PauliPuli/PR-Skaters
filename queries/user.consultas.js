import pool from "../config/skateDb.js";

export const addParticipante = async (data) => {
  try {
    let sql = {
      text: `insert into skaters(email,nombre,password,anos_experiencia,especialidad,foto,estado) values ($1,$2,$3,$4,$5,$6,'false')returning *`,
      values: data
    };
    const resp = await pool.query(sql);
    console.log("Participante agregado con éxito");
    return resp.rows;
  } catch (error) {
    console.log(error.message);
  }
};

export const getParticipantes = async () => {
  try {
    let sql = {
      text: "select * from skaters",
    };
    const resp = await pool.query(sql);
    console.log(resp.rows);
    return resp.rows;
  } catch (error) {
    console.log(error.message);
  }
};
