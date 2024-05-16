const { Sequelize } = require("sequelize");

const db = new Sequelize('cap','sa','sql123456',{
  host: 'localhost',
  dialect: 'mssql',
  trustedConnection: true,
})

db.authenticate().then(() => {
  console.log('Conexão bem-sucedida.');
}).catch(err => {
  console.error('Erro ao conectar ao banco de dados:', err);
});

module.exports = db;
