import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import cors from 'cors';

//App config
const app=express();
const port=process.env.PORT || 8001
const connection = 
"mongodb+srv://aruna_sukrutha:@Aruna973@cluster0.yvsu4.mongodb.net/tinderdb1?retryWrites=true&w=majority";

//Middlewares
app.use(express.json());
app.use(cors());

//DB Config- connection pooling
mongoose.connect(connection,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

//API endpoints
app.get("/",(req,res) => res.status(200).send("Hello, Welcome to Mongo DB"));
//uploading pictures to db
app.post('/tinder/cards',(req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
});
//to get data from database
app.get('/tinder/cards',(req,res)=> {
    // const dbCard = req.body

    Cards.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
});



//Listener
app.listen(port, ()=> console.log(`Listening on localhost port: ${port}` ));