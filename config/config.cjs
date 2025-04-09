require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mssql',
    dialectModule: require('tedious'), // 🔧 Force Sequelize to load tedious
    dialectOptions: {
      options: {
        instanceName: process.env.DB_INSTANCE || undefined,
        encrypt: false,
        trustServerCertificate: true,
      },
    },
    logging: (msg) => {
      if (msg.includes('INSERT')) {
        //console.log(msg);  // Only log INSERT queries
      }
    },
  },
};
