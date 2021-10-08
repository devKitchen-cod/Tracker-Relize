// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('postgres', 'sergey1', '1', {
//   host: 'postgres',
//   dialect:  'postgres'
// });
// module.exports = sequelize

const Pool = require('pg').Pool

 const pool = new Pool({
  host: 'postgres', //postgres
  port: 5432,
  user: 'sergey1',
  password: '1',
  database: 'work_db' 
})
//pool.connect();
module.exports = pool