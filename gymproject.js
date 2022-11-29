const express = require("express");
const  fs = require("fs");
const app = express()
const path = require("path")
const port = 80;

//EXPRESS STUFF

app.use('/static', express.static('static'))
app.use(express.urlencoded())
//set template as pug

app.set('view engine', 'pug')

//set the directory in pug

app.set("views", path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const text = "The font text is very useful for the website"

    const params = { 'title': "Ayush sharma", "Length": text }
    res.status(200).render("project.pug", params);
})

 
//  ENDPOINT 
app.get("/", (req, res) => { 
    res.send("Good to see you in my website")
});

app.post('/' ,(req , res)=>{
   Name = req.body.Name
   Age = req.body.Age
   Email = req.body.Email
   Gender = req.body.Gender 
   Address = req.body.Address 
   More = req.body.More 

   let outputTowrite = `The name of client is ${Name} , the age of client is ${Age}, the client email ${Email} , client gender ${Gender}, client address ${Address} , The more information about client ${More} `
   fs.writeFileSync('output.txt' ,outputTowrite)
   const params ={'message' : 'Your form has been successfully submitted'}
   res.status(200).render('project.pug' ,params)
});
//start the server

app.listen(port, () => {
    console.log(`This website successfully work on localhost ${port}`)
})