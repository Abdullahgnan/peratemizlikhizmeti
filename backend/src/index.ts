import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import contactRoutes from './routes/contactRoutes';

config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;
// Middleware
app.use(cors({
  origin: 'https://peratemizlik.com', // Sadece kendi domaininiz
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

// Ana endpoint - sağlık kontrolü için
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'PeraHizmet API çalışıyor' });
});

// API endpoint'i - sağlık kontrolü için
app.get('/api', (req, res) => {
  res.json({ status: 'ok', message: 'PeraHizmet API çalışıyor' });
});

// Routes
app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
}); 

