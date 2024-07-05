import mongoose from 'mongoose';

const bookSchema=mongoose.Schema();

export const kittySchema = new mongoose.Schema({
    name: String
  });