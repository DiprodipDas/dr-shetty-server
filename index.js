const express= require('express');
const cors = require('cors');
const app= express();
const port=process.env.PORT||5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();



app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ntptfwh.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/',(req,res)=>{
    res.send('Dr shetty server is running')
})

app.listen(port,()=>{
    console.log(`Dr shetty server is running on port ${port} `)
})