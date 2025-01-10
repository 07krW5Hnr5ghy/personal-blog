const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(
    session({
        secret:'123abc+',
        resave:false,
        saveUninitialized:true,
    })
);
app.set('view engine','pug');
app.set('views',path.join(__dirname,'view'));

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});