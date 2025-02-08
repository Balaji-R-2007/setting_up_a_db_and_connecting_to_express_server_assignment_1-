const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3010;

app.use(express.static('static'));

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL)
    .then((data) => {
      console.log(
        `Connected to database`
      );
    })
    .catch((err) => {
      console.error(`Error connecting to database: ${err.message}`);
      process.exit(1); 
    });
};

connectDatabase();
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
