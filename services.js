const path = require('path');
const fs = require('fs');

const articlesDir = path.join(__dirname,'articles');

const getArticles = () => {
    if(!fs.existsSync(articlesDir)) fs.mkdirSync(articlesDir);
    return fs.readdirSync(articlesDir).map(file => {
        const data = JSON.parse(fs.readFileSync(path.join(articlesDir,file)));
        return {id: path.basename(file,'.json'),...data};
    }); 
}

const saveArticle = (id,data) => {
    const filePath =  path.join(articlesDir, `${id}.json`);
    fs.writeFileSync(filePath,JSON.stringify(data,null,2));
}

const deleteArticle = (id) => {
    const filePath =  path.join(articlesDir, `${id}.json`);
    if(fs.existsSync(filePath)) fs.unlinkSync(filePath);
} 

module.exports = {
    articlesDir,
    getArticles,
    saveArticle,
    deleteArticle
};