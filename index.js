require('dotenv').config();
const express = require("express");
const router = require("./routes/user.router");
const mongoose = require("mongoose");
const app = express();
// Middleware to parse JSON request body
app.use(express.json());

// Use the user router with a base route
app.get("/" , (req , res)=>{
    res.send("helo this is aman")
})
app.get('/ping', (req, res) => {
    res.send('PONG')
});
app.use('/api', router);

// Connect to MongoDB
mongoose.connect( process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
