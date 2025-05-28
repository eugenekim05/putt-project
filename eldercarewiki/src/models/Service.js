import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  
  // Service categorization
  category: {
    type: String,
    enum: ['medical', 'recreational', 'home_care', 'social', 'transportation', 'home_management', 'assistive_technology'],
    required: true
  },
  subCategory: String,
  
  // Service provider info
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider', required: true },
  
  // Location and availability
  serviceArea: {
    coordinates: {
      lat: Number,
      lng: Number
    },
    radius: Number, // miles
    specificLocations: [String]
  },
  
  // Pricing
  pricing: {
    model: { 
      type: String, 
      enum: ['free', 'hourly', 'daily', 'monthly', 'per_service', 'sliding_scale'] 
    },
    amount: Number,
    insuranceAccepted: [String], // Medicare, Medicaid, private insurance
    financialAssistance: Boolean
  },
  
  // Eligibility and requirements
  eligibility: {
    ageRequirement: String,
    conditionSupport: [String], // dementia, mobility, vision, etc.
    incomeRequirements: String
  },
  
  // Contact and booking
  contact: {
    phone: String,
    email: String,
    website: String,
    bookingMethod: { 
      type: String, 
      enum: ['phone', 'online', 'in_person', 'through_platform'] 
    }
  },
  
  // Service details
  serviceHours: {
    monday: { open: String, close: String },
    tuesday: { open: String, close: String },
    wednesday: { open: String, close: String },
    thursday: { open: String, close: String },
    friday: { open: String, close: String },
    saturday: { open: String, close: String },
    sunday: { open: String, close: String }
  },
  
  // Quality indicators
  vettingStatus: {
    type: String,
    enum: ['verified', 'pending', 'not_verified'],
    default: 'pending'
  },
  licenses: [String],
  certifications: [String],
  backgroundCheckDate: Date,
  
  // User feedback
  reviews: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    reviewDate: { type: Date, default: Date.now },
    verified: Boolean // verified that user actually used service
  }],
  
  averageRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  
  // Administrative
  isActive: { type: Boolean, default: true },
  featuredService: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);