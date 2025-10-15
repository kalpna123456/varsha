const express =require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const FIRSTNAME ="kalpna";
const LASTNAME  ="devi";

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
});
app.post("/contact",(req,res)=>{
    const { firstname,lastname }= req.body;
    if(firstname === FIRSTNAME && lastname === LASTNAME){
        res.sendFile(path.join(__dirname,"public","dasbord.html"));
    }
    else{
        res.send
        (`<h1>kalpu your contact page not found</h1><a href="/">logout</a>`);
    }
});
app.get("/logout",(req,res)=>{
    res.redirect("/");
});
app.listen(PORT,()=>{
    console.log(`kalpna your website ready http://localhost:${PORT}`);
})
