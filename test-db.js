import { Connection } from 'tedious';

const config = {
  server: '192.168.10.117',
  authentication: {
    type: 'default',
    options: {
      userName: 'api',
      password: 'p3GmJjg96!kwhhD',
    },
  },
  options: {
    database: 'Enteprise_Solution_Test',
    instanceName: 'MINUZATEST',
    encrypt: false,
    trustServerCertificate: true,
  },
};

const connection = new Connection(config);

connection.on('connect', err => {
  if (err) {
    console.error('Connection failed:', err.message);
  } else {
    console.log('Connected to MSSQL successfully.');
  }
  connection.close();
});

connection.connect();
