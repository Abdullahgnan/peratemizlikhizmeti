import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: 'abdullahgunan',
  host: 'localhost',
  database: 'peratemizlik',
  password: 'Abd.1998',
  port: 5432,
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