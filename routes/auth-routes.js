const router = require('express').Router();

// auth login
router.get('/login', (req, res) => {   // 相對於前面的 /auth, 絕對位址為 http://localhost:3000/auth/login
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {   // 相對於前面的 /auth, 絕對位址為 http://localhost:3000/auth/logout
    // handle with passport
    res.send('logging out');
});

// auth with google+
router.get('/google', (req, res) => {   // 相對於前面的 /auth, 絕對位址為 http://localhost:3000/auth/google
    // handle with passport
    res.send('logging in with Google');
});

module.exports = router;
