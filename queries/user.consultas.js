import pool from "../config/skateDb.js";

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

export const selectParticipante=async(email,password)=>{
  try {
    console.log(email,password);
    const sql = {
      text: `select * from skaters where email='${email}' and password='${password}'`
    };
    const resp = await pool.query(sql);
    // console.log(resp.rows[0],'objeto');
    return resp.rows[0];
  } catch (error) {
    console.log(error.message);
  }
}

export const addParticipante = async (data) => {
  try {
    let sql = {
      text: `insert into skaters(email,nombre,password,anos_experiencia,especialidad,foto,estado) values ($1,$2,$3,$4,$5,$6,'false')returning *`,
      values: data
    };
    const resp = await pool.query(sql);
    console.log("Participante agregado con éxito");
    return resp.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};

export const editParticipante=async(data)=>{
  try{
    let sql={
      text:`update skaters set nombre=$1, password=$2, anos_experiencia=$3, especialidad=$4 where id='${id}' returning *`,
      values:data
    }
    console.log(skater.email,)
    const resp = await pool.query(sql);
    return resp.rows[0];
  }catch(error){
    console.log(error.message);
  }
};

export const deleteParticipante=async(id)=>{
  try{
    const sql={
      text: "delete from skaters where id= $1",
      values: [id],
    };
   const resp= await pool.query(sql)
return resp.rows
  }catch(error){
    console.log(error.message);
  }
}