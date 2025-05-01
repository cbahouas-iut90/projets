const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const sequelize = require('./config/db');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();


app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // true si HTTPS
}));

// Passport config
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) return done(null, false);
        const isMatch = await bcrypt.compare(password, user.password);
        return isMatch ? done(null, user) : done(null, false);
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id);
    done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', authRoutes);

// DB Sync + Server
sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Serveur backend sur http://localhost:3000'));
});