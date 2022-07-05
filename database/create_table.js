import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  id:  Number, 
  fecha: String,
  info:   [String],
})