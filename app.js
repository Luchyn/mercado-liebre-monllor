const express = require('express');
const { get } = require('express/lib/response');
const path = require('path');

const app = express();



app.get('/',(req,res) =>{
    res.sendFile((__dirname + '/views/index.html'));
});


app.use(express.static(path.join(__dirname,'./public')));

 
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});