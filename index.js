import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const formData = {};

app.get("/" , (req,res)=>{
    res.render("input");
})

app.get("/resume" , (req,res)=>{
    res.render("main");
})

app.post("/" , (req,res) =>{
    formData.name = req.body.names;
    formData.phone = req.body.phone;
    formData.email = req.body.email;
    formData.linkedin = req.body.linkedin;
    formData.about = req.body.about;
    formData.collegeName = req.body.collegeName;
    formData.degree = req.body.degree;
    formData.cgpa = req.body.cgpa;
    formData.seniorSchool = req.body.seniorSchool;
    formData.seniorPer = req.body.seniorPer;
    formData.highSchool = req.body.highSchool;
    formData.highPer = req.body.highPer;
    console.log(formData);
    res.render("main" , {
        nameOfPerson : formData.name,
        phoneNumber : formData.phone,
        email : formData.email,
        linkedin : formData.linkedin,
        about : formData.about,
        collegeName : formData.collegeName,
        degree : formData.degree,
        cgpa : formData.cgpa,
        seniorSchool : formData.seniorSchool,
        seniorPer : formData.seniorPer,
        highSchool : formData.highSchool,
        highPer : formData.highPer
    })
})

app.listen(port , ()=> {
    console.log(`App Running on Port ${port}`);
})