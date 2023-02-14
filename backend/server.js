const express = require('express');
const PORT=process.env.PORT || 8000;
const app = express();
const cors=require('cors');
require('./db/connection')

app.use(express.json());
app.use(express.static('public'))
app.use(cors());
const user=require('./routes/user');
const recipe = require('./routes/recipe');
const ingrident = require('./routes/ingrident');
const processs = require('./routes/process');
app.use('/api',recipe)
app.use('/api',user);
app.use('/api',ingrident);
app.use('/api',processs);

app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(PORT,()=>{
    console.log('listen on port '+PORT)
})