const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);  // 看來 app.use 就是 call. 其實與 app.get 類似，但改用 .use 的而非直接給 function 

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
