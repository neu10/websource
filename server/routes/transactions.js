const passport = require('../config/passport.js');
module.exports = function(app) {



    const model = require('../model/transactions')(app);

    app.post('/getAllTxns', (req, res) => {
        let payload = req.body;
        model.getAllTransactionsForUser(payload).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        });
    });
    app.post('/addUserTransaction', (req, res) => {
        let payload = req.body;
        model.addUserTransaction(payload).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        });
    });

    app.post('/getUserTransactionById', (req, res) => {
        let payload = req.body;
        model.getUserTransactionById(payload).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        });
    });

    app.post('/updateTransaction', (req, res) => {
        let payload = req.body;
        model.updateTransaction(payload).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        });
    });

    app.post('/deleteTransaction', (req, res) => {
        let payload = req.body;
        model.deleteTransaction(payload).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        });
    });

    app.get('/auth/login',(req, res, next) => {
        if (req.query.return) {
          req.session.oauth2return = req.query.return;
        }
        next();
      },
      // Start OAuth 2 flow using Passport.js
      passport.authenticate('google', { scope: ['email', 'profile'] })
    );

    app.get(
        // OAuth 2 callback url. Use this url to configure your OAuth client in the
        // Google Developers console
        '/auth/google/callback',
      
        // Finish OAuth 2 flow using Passport.js
        passport.authenticate('google'),
      
        // Redirect back to the original page, if any
        (req, res) => {
            console.log('callback');
          const redirect = req.session.oauth2return || '/';
          delete req.session.oauth2return;
          res.redirect(redirect);
        }
      );
}