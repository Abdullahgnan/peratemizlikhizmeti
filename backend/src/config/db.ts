import { Pool } from 'pg';
import { config } from 'dotenv';

config(); // .env dosyasını yükle

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export { pool };

// Bağlantıyı test et
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Veritabanına bağlanırken hata:', err.stack);
  }
  console.log('PostgreSQL veritabanına başarıyla bağlandı');
  release();
}); 