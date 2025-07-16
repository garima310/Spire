import express, { json } from 'express';
const app = express();
import jobRoutes from './Backend/routes/jobRoutes';
import authRoutes from './Backend/routes/authRoutes';

app.use(json());

app.use('/api', jobRoutes);
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server is running on 5000'));
