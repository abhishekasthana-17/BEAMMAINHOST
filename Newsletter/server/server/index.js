import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import newsletterRoutes from './src/routes/newletterRouter.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:4028', 'http://localhost:5173'], 
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/newsletter', newsletterRoutes);



app.get('/', (req, res) => {
  res.status(200).json({message:'Welcome to the Beam Wallet Newsletter API'});
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});