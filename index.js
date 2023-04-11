const express=require('express')
const app=express()
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(6500,()=>{
    console.log("localhost host runnng on 6500 port");
})