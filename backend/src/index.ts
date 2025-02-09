import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import contactRoutes from './routes/contactRoutes';

config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
}); 

