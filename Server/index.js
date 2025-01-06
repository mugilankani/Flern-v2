import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.MONGO_URI); 

import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
