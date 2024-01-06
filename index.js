import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/" , (req,res)=>{
    res.render("input");
})

app.listen(port , ()=> {
    console.log(`App Running on Port ${port}`);
})