const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use('/admin' , adminRoutes.routes);
app.use(shopRoutes.router)

app.use((req,res,next)=>{
   res.sendFile(path.join(__dirname  , 'views' , '404.html'))
});

app.listen(8000 , console.log('listening on 8000'));