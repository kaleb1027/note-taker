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

//STEPS FOR DEPLOYMENT
//PUSH EVERYTHING TO GITHUB REPO
//heroku login in CMD and go to browser to login
//heroku create in git bash
//git push heroku main
//heroku open to open the app in browser
