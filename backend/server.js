//connection to mongo db
const express = require('express');
const User = require('./signup');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/signup', async(req, res) => {
    try{
        const user = new User(req.body);
        const result = await user.save()
        res.send(result);
    }catch(error){
        console.log("error in signin ",error)
    }
})


app.listen(port, () => {
    console.log("server is running on port 3000");
});