const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const categories = require('./data/categories.json');
const cources = require('./data/cources.json');
app.use(cors());
app.get('/', (req, res) => {
    res.send('fffffffffff')
});

app.get('/course-categories', (req, res) => {
    res.send(categories);
});

app.get('/categorie/:id', (req,res) => {
    const id =req.params.id;
    if(id === '06'){
        res.send(cources)
    }
    else{
        const category_course = cources.filter(c => c.categorie_id === id);
    res.send(category_course)
    }
    
})

app.get('/s-cources/:id', (req, res) => {
    // res.send(cources)
    // console.log(req.params.id);
    const id = req.params.id;
    const selectedCourse = cources.find(c => c.id === id);
    res.send(selectedCourse)
});

app.listen(port, () =>{
    console.log(`server runing on ${port}`);
});
hell