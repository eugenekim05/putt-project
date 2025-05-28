import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Basic Info
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { 
    type: String, 
    enum: ['senior', 'caregiver', 'service_provider'], 
    required: true 
  },
  
  // Senior-specific fields
  birthDate: Date,
  medicalConditions: [String],
  mobilityLevel: { 
    type: String, 
    enum: ['independent', 'assisted', 'wheelchair', 'limited'] 
  },
  cognitiveLevel: { 
    type: String, 
    enum: ['normal', 'mild_decline', 'moderate_decline', 'severe_decline'] 
  },
  
  // Emergency contacts
  emergencyContacts: [{
    name: String,
    relationship: String,
    phone: String,
    email: String
  }],
  
  // Preferences
  preferredServices: [String],
  maxTravelDistance: Number, // in miles
  budgetRange: {
    min: Number,
    max: Number
  },
  
  // Location
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  
  // Accessibility preferences
  needsLargeFonts: { type: Boolean, default: false },
  needsHighContrast: { type: Boolean, default: false },
  prefersVoiceNavigation: { type: Boolean, default: false },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);