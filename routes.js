const express = require('express');
const fs = require('fs');
const {
    articlesDir,
    getArticles
} = require('./services');

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

module.exports = router;