import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import contactRoutes from './routes/contactRoutes';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: 'https://peratemizlik.com', // Frontend domaininizi buraya ekleyin
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(json());

// Routes
app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
}); 

