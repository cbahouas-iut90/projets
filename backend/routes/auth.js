const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) return res.status(400).json({ message: 'Utilisateur existe déjà' });
        await User.create({ username, password });
        res.status(201).json({ message: 'Inscription réussie' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: 'Connecté', user: req.user });
});

router.get('/logout', (req, res) => {
    req.logout(() => {
        res.json({ message: 'Déconnecté' });
    });
});

router.get('/me', (req, res) => {
    if (req.isAuthenticated()) return res.json(req.user);
    res.status(401).json({ message: 'Non authentifié' });
});

module.exports = router;
