import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import contactRoutes from './routes/contactRoutes';

config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
}); 

