// Boa sorte! <3
require('dotenv').config();
const fetch = require('node-fetch');
const key = process.env.CLIENT_ID;

const express = require('express');
const hbs = require('hbs');
const app = express();
const path    = require('path');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=yourkey'
    // https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=
    fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=' + key)
    .then(res => res.json())
    .then(json => {
        // let top10 = json.response.docs;
        //res.render('index',{top10});
        let top10 = json.results.slice(0,10);
        res.render('index',{top10});
        // res.send({json});
    });    
});

app.get('/search-results', (req, res) => {

    let query = req.query.search;    

    fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&api-key=' + key)
    .then(res => res.json())
    .then(json => {
        let top10 = json.response.docs;
        res.render('search-results',{top10});
        // res.send(json);
    });    
});

app.get('/most-viewed', (req, res) => {
    
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=' + key)
    .then(res => res.json())
    .then(json => {
        // let top10 = json.response.docs;
        //res.render('index',{top10});
        let top10 = json.results;
        res.render('most-viewed',{top10});
        // res.send({json});
    });    
});

app.get('/emailed', (req, res) => {
    
    fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=' + key)
    .then(res => res.json())
    .then(json => {
        // let top10 = json.response.docs;
        //res.render('index',{top10});
        let top10 = json.results;
        res.render('emailed',{top10});
        // res.send({json});
    });    
});

app.listen(3000, () => console.log("My NYT project running on port 3000"));