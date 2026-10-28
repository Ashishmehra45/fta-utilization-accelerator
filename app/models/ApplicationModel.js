import mongoose from 'mongoose';

// Pehle define karte hain ki data kaisa dikhega (Schema)
const applicationSchema = new mongoose.Schema({
  // STEP 1: Firm Details
  firmName: { type: String, required: true },
  iecCode: { type: String, required: true },
  iecPending: { type: Boolean, default: false },
  gstin: { type: String, required: true },
  enterpriseSize: { type: String, required: true },
  udyamNumber: { type: String },
  firmType: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String, required: true },
  website: { type: String },
  exportCouncil: { type: String },

  // STEP 2: Attendee Info
  primaryContact: {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
  },
  secondaryContact: {
    name: { type: String },
    designation: { type: String },
    mobile: { type: String },
    email: { type: String },
  },

  // STEP 3: Sector
  sectorTrack: { type: String, required: true },

  // STEP 4: Product
  primaryProduct: {
    description: { type: String, required: true },
    hsCode: { type: String, required: true },
  },
  additionalProducts: [{ description: String, hsCode: String }],
  madeInMp: { type: String, required: true },
  importedInputs: { type: String },
  certifications: [{ type: String }],

  // STEP 5: Market
  targetMarket: { type: String, required: true },
  secondMarket: { type: String },
  buyerStatus: { type: String, required: true },
  exportedBefore: { type: String, required: true },
  exportsLastFy: { type: String, required: true },
  claimedFtaBefore: { type: String, required: true },
  tradeConnectRegistered: { type: String },
  statusHolder: { type: String },

  // STEP 6: Final Question
  stoppingFactor: { type: String, required: true },

  // STEP 7: System Details
  referenceNumber: { type: String, required: true, unique: true },
  status: { type: String, default: "Pending" }, // Admin ke liye useful
  createdAt: { type: Date, default: Date.now }
});

// Agar model pehle se bana hai to wahi use karo (Next.js hot reload problem solve karne ke liye)
const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);

export default Application;