const express       = require('express');
const bodyParser    = require('body-parser');
const bcrypt        = require('bcrypt-nodejs');
const cors          = require('cors');
const knex          = require('knex');

const register      = require('./controllers/register');
const signin        = require('./controllers/signin');
const profile       = require('./controllers/profile');
const image         = require('./controllers/image');
const keys          = require('./config/keys');

const db = knex({
    client: 'pg',
    connection: {
        host:       keys.dbHost,
        database:   keys.dbName,
        user:       keys.dbUser,
        password:   keys.dbPassword  
    }
});

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res)             => { res.json('it is working') })

// 1. signin   
app.post('/signin', (req, res)      => { signin.handleSignin(req, res, db, bcrypt) })
// 2. register
app.post('/register', (req, res)    => { register.handleRegister(req, res, db, bcrypt) })
// 3. profile
app.get('/profile/:id', (req, res)  => { profile.handleProfileGet(req, res, db) })
// 4. image
app.put('/image', (req, res)        => { image.handleImage(req, res, db) })
app.post('/imageurl', (req, res)    => { image.handleApiCall(req, res) })

app.listen(process.env.PORT || 3001, () => {
    console.log(`App runing on port ${process.env.PORT}`);
})
