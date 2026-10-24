import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  sector: { type: String, required: true },
  productCategory: { type: String },
  targetMarkets: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);