import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import contactRoutes from './routes/contactRoutes';

config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
// Middleware
app.use(cors({
  origin: '*', // Tüm domainlerden gelen isteklere izin ver
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
}); 

