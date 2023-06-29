const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://blog:G1bIkIhkdMZFlMVL@cluster0.hnphmkw.mongodb.net/")

app.post('/register', async (req, res) => {
    const {username,password} = req.body;
    try{
        const userDoc = await User.create({username, password});
        res.json(userDoc)
    } catch(e) {
        res.status(400).json(e)
    }
})

app.listen(4000)
 