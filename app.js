const express = require('express');
const app = express();
//ejs
app.set( "view engine", "ejs");
app.set('views','views')
//public
app.use(express.static('public'));



//route ref
app.use(require('./routes/index'))
app.use(require('./routes/Albums'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'));




app.listen(3001, ()=>{

    console.log('server is running on port 3000');
})

console.log('testing')