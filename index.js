const express = require("express");
const app = express();


app.use(express.static("./static"))

app.get("/api/hello", (req, res)=>{
  res.send("bye")
})
app.get("/api/bye", (req, res)=>{
  res.send("hello")
})

app.listen(3000, (err)=>{
  if(err)return console.log(err);
  console.log("We are listening on http://localhost:3000");
})