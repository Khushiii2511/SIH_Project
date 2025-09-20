const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// @route    GET api/progress/:userId
// @desc     Get user's gamification progress
// @access   Public (for now)
router.get('/:userId', async (req, res) => {
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

module.exports = router;