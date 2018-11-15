const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const path=require('path');
const routes=require('./routes');
const app=express();
const port=process.env.PORT||3001;
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.get('/',routes.home);
 app.listen(port,function(){                                /* starting the app*/
    console.log('server started on '+ port);
});