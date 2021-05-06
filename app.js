const express = require('express');

const app = express();

// set view engine --> what is 'view engine' https://stackoverflow.com/questions/8308485/what-is-view-engine-what-does-it-actually-do
app.set('view engine', 'ejs');  // ejs or many others. 

// create home route
app.get('/', (req, res) => {
    res.render('home');  // home.ejs because we've specified the 'view engine' as so.  
});

app.listen(3000, () => {
    // This is the call back function to know when the listening would have been really started 
    console.log('app now listening for requests on port 3000');
});
