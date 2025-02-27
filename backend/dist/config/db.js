"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // .env dosyasını yükle
const pool = new pg_1.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});
exports.pool = pool;
// Bağlantıyı test et
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Veritabanına bağlanırken hata:', err.stack);
    }
    console.log('PostgreSQL veritabanına başarıyla bağlandı');
    release();
});
