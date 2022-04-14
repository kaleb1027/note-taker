const express = require('express');
const path = require('path');

//YOU NEED THIS FOR HOMEWORK
//
//
//
//
//
//
//
//
//
//
//
//
//

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// GET Route for homepage

//YOU NEED AT LEAST THIS TO GET A VISIBLE DEPLOYMENT
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));