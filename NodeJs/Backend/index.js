const express = require('express')
const app = express()
const cors = require('cors')
const User = require('./models/user')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

require('./db/conn');

// app.get('/', (req, res)=>{
//     User.find({}, (err, users)=>{
//         if(err){
//             res.send('Something went wrong!');
//             next();
//         }
//         res.json(users);
//     });
// })

// api add
app.use('/api/user',require('./routes/user'));

const port = 8000;
app.listen(port, ()=>{
    console.log("Server is running!");
})
