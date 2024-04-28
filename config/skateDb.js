import pkg from "pg";
const { Pool } = pkg;

process.loadEnvFile()

const {DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD} = process.env;


  const pool = new Pool({
    password: DB_PASSWORD,
    database:DB_DATABASE,
    host: DB_HOST,
    user: DB_USER,
    allowExitOnIdle: true,
  })

// const getData= async ()=>{
//     const response = await pool.query('select now()');
//     console.log(response.rows)
//   }
// getData();

  export default pool; //sin llaves es cuando tenemos sólo una función