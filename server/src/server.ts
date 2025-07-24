import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import incidentRoutes from'./routes/routes';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

//HEALTH CHECK FOR ENVIRONMENT VARIABLES
console.log('🔍 Environment check:');
console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
console.log('DATABASE_URL preview:', process.env.DATABASE_URL?.substring(0, 30) + '...');
console.log('PORT:', process.env.PORT);
//////////////////////////////////////////


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: '*'
}))

app.use(express.json());
app.use('/api', incidentRoutes);

// Health check :::: OPTIONAL-> KANGED
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
