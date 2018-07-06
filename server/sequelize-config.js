const Sequelize = require('sequelize');
const sequelize = new Sequelize('playground', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
      freezeTableName: true,
  }

});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Todos = sequelize.define('todolist',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    todo:{
        type: Sequelize.STRING,
    },
    done: {
        type: Sequelize.BOOLEAN
    }
});
