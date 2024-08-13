const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');


router.get('/signup', (req, res) => {
    console.log('GET /signup');
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    console.log('POST /signup');
    try {
        const newAdmin = new Admin({
            adminid: req.body.adminid,
            username: req.body.name,
            passwd: req.body.password
        });
        await newAdmin.save();
        res.redirect('/admin/login');
    } catch (error) {
        res.status(500).send('Error signing up.');
    }
});


router.get('/login', (req, res) => {
    console.log('GET /login');
    res.render('login');
});

router.post('/login', async (req, res) => {
    console.log('POST /login');
    try {
        const admin = await Admin.findOne({ username: req.body.name });
        if (admin && admin.passwd === req.body.password) {
            res.redirect('mongodb://localhost:27017/DEPARTMENTNEWS'); 
        } else {
            res.status(401).send('Invalid username or password.');
        }
    } catch (error) {
        res.status(500).send('Error logging in.');
    }
});

module.exports = router;
