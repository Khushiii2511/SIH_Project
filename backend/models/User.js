const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // ... other user details
  progress: {
    quests: [{
      questName: String,
      status: { type: String, enum: ['unlocked', 'in-progress', 'completed'], default: 'unlocked' },
      badgeTier: { type: String, enum: ['none', 'Bronze', 'Silver', 'Gold'], default: 'none' },
      completionDate: Date
    }],
    virtualGarden: [{
      plotId: Number,
      growthStage: { type: String, enum: ['seed', 'sprout', 'plant'], default: 'seed' },
      lastUpdated: Date
    }],
    skillPoints: {
      'Modern Farmer': { type: Number, default: 0 },
      'Local Entrepreneur': { type: Number, default: 0 },
      'Health & Hygiene': { type: Number, default: 0 }
    }
  },
  community: {
    schoolId: String,
    villageId: String
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;