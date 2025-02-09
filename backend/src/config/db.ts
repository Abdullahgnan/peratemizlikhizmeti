import { Pool } from 'pg';
import { config } from 'dotenv';

config();

export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
});

// Bağlantıyı test et
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Veritabanına bağlanırken hata:', err.stack);
  }
  console.log('PostgreSQL veritabanına başarıyla bağlandı');
  release();
}); 