const express = require('express');
const fs = require('fs');
const {
    articlesDir,
    getArticles,
    saveArticle,
    deleteArticle
} = require('./services');
const {authMiddleware} = require('./middlewares/authentication');

const router = express.Router();

// Guess section

router.get('/',(req,res)=>{
    const articles = getArticles();
    res.render('home',{articles});
});

router.get('/article/:id',(req,res)=>{
    const {id} = req.params;
    const filePath = path.join(articlesDir,`${id}.json`);
    if(!fs.existsSync(filePath)) return res.status(404).send('Article not found.');
    const article = JSON.parse(fs.readFileSync(filePath));
    res.render('article',{article});
});

// Admin section

router.get('/dashboard',authMiddleware,(req,res)=>{
    const articles = getArticles();
    res.render('dashboard',{articles});
});

router.get('/add',authMiddleware,(req,res)=>{
    res.render('add-article');
});

router.post('/add',authMiddleware,(req,res)=>{
    const {title,content,date} = req.body;
    const id = Date.now().toString();
    saveArticle(id,{title,content,date});
    res.redirect('/dashboard');
});

router.get('/edit/:id',authMiddleware,(req,res)=>{
    const {id} = req.params;
    const filePath = path.join(articlesDir,`${id}.json`);
    if(!fs.existsSync(filePath)) return res.status(404).send('Article not found');
    const article = JSON.parse(fs.readFileSync(filePath));
    res.render('edit-article',{id,article});
});

router.post('/edit/:id',authMiddleware,(req,res)=>{
    const {id} = req.params;
    const {title,content,date} = req.body;
    saveArticle(id,{title,content,date});
    res.redirect('/dashboard');
});

router.post('/delete/:id',authMiddleware,(req,res)=>{
    const {id} = req.params;
    deleteArticle(id);
    res.redirect('/dashboard');
});

// Authentication routes

router.get('/login',(req,res)=>{
    res.render('login');
});

router.post('/login',(req,res)=>{
    const {username,password} = req.body;
    if(username === 'admin' && password === 'password'){
        req.session.isLoggedIn = true;
        res.redirect('/dashboard');
    }else{
        res.render('login',{error:'Invalid credentials'});
    }
});

router.get('/logout',(req,res)=>{
    req.session.destroy(()=>res.redirect('/'));
});

module.exports = router;