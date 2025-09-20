const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows parsing of JSON request bodies

// MongoDB Connection
// IMPORTANT: Replace 'YOUR_ACTUAL_PASSWORD' with your MongoDB Atlas password
const mongoURI = 'mongodb+srv://anshulmunjal01:Project1@gyanoday-cluster.92fbaqh.mongodb.net/?retryWrites=true&w=majority&appName=Gyanoday-cluster';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import the User model
const User = require('./models/User');

// API Routes
// Route to create a new user and populate it with initial gamification data
app.post('/api/users/create', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name || 'Test User',
      email: req.body.email || 'test@example.com',
      progress: {
        quests: [{
          questName: 'The Modern Farmer\'s Quest',
          status: 'in-progress',
          badgeTier: 'Bronze'
        }],
        virtualGarden: [
          { plotId: 1, growthStage: 'plant' },
          { plotId: 2, growthStage: 'sprout' },
          { plotId: 3, growthStage: 'seed' }
        ],
        skillPoints: {
          'Modern Farmer': 75,
          'Local Entrepreneur': 20,
          'Health & Hygiene': 10
        }
      },
      community: {
        schoolId: 'school-a',
        villageId: 'nabha-a'
      }
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to get a single user's gamification progress
app.get('/api/users/:userId/progress', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user.progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
