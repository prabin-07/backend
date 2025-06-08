const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// Create a new member
router.post('/', async (req, res) => {
    try {
        const member = new Member(req.body);
        await member.save();
        res.status(201).json(member);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all members
router.get('/', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a member
router.put('/:id', async (req, res) => {
    try {
        const member = await Member.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json(member);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a member
router.delete('/:id', async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 