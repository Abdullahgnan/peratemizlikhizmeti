import { Pool } from 'pg';
import { config } from 'dotenv';

config(); // .env dosyasını yükle

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// Veritabanı bağlantısını test et
pool.connect()
  .then(() => console.log('Veritabanına başarıyla bağlandı'))
  .catch(err => console.error('Veritabanına bağlanırken hata:', err)); 