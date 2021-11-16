//we use express bcz its time saving and have to give less custom code...like status codes
const express = require('express')
const path=require('path')
const app = express()
const port = 3000
//MiddleWare is a function which has two objects one is response and the other is req
//req wo hai jo aaa rhe hai and res wooh hai jo jaa raha hai,toh res ko jaate waqt bhi alter kar sajta hai....... 
// const middleWare=(req,res,next)=>{
//   console.log(req)
//   next();//Notice the call above to next(). Calling this function invokes the next middleware function in the app. The next() function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function. The next() function could be named anything, but by convention it is always named “next”. To avoid confusion, always use this convention.
//}//Here we have created our own middleWare
//app.use(middleWare)
app.use(express.static(path.join(__dirname,"public")))//this is how we render a whole folder
app.get('/hello/:name', (req, res) => {
  res.send('Hello World!'+req.params.name)//accessing req params
})
app.get('/about', (req, res) => {
  //res.send('about')
  //res.sendFile(path.join(__dirname,'index.html'))
  res.json({"Himanshu Lomda": 69})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})