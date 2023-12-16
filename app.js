const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')

const sequelize = require('./util/db')

const app = express();

app.set('view engine' , 'ejs')
app.set('views' , 'views')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , 'public')))

app.use('/admin' , adminRoutes);
app.use(shopRoutes)

app.use(errorController.get404);

sequelize.sync()
.then(res=>{
   app.listen(8000 , console.log('listening on 8000'));
}).catch(err=>{
   console.log(err);
})
