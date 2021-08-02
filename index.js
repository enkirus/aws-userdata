const express = require('express')
const app = express()



app.get('/app1',(req,res)=>
{
    res.send("From /app1 path i am "+process.env.hostname)
})

app.get('/app2',(req,res)=>
{
    res.send("From /app2 path i am "+process.env.hostname)
})





app.listen(8050,() =>
{
    console.log("The container has started listening on port 8050")
 
  
})
