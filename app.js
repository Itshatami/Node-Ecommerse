const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.set('view engine' , 'ejs')
app.set('views' , 'views')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , 'public')))

app.use('/admin' , adminRoutes.routes);
app.use(shopRoutes.router)

app.use((req,res,next)=>{
   res.render('404' , {pageTitle: '404'})
});

app.listen(8000 , console.log('listening on 8000'));