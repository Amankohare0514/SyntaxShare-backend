require('dotenv').config();
const express = require("express");
const router = require("./routes/user.router");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'https://syntax-share-frontend.vercel.app/'
  }));
  
app.use(express.json());


app.get("/" , (req , res)=>{
    res.send("helo this is aman")
})
app.get('/ping', (req, res) => {
    res.send('PONG')
});
app.use('/api', router);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    res.status(500).json({ error: 'Database connection error' });
});


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
