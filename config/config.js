import dotenv from 'dotenv';
import path from 'path';

// Replicate __dirname in ES Module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Load .env file from the directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mssql',
    dialectOptions: {
      options: {
        instanceName: process.env.DB_INSTANCE || undefined,
        encrypt: false,
        trustServerCertificate: true,
      },
    },
    logging: false,
  },
};
