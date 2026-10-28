import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  firm: {
    type: String,
    required: [true, 'Firm name is required'],
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    lowercase: true,
  },
  question: {
    type: String,
    required: [true, 'Question is required'],
  },
  status: {
    type: String,
    enum: ['Pending', 'Resolved'],
    default: 'Pending',
  }
}, { timestamps: true });

// Agar model pehle se bana hua hai toh wahi use karo, warna naya banao
const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;