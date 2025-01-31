import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));


app.listen(8000, () => {
  console.log('Server is running on port 8000');
});