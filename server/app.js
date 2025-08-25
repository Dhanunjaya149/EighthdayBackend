import express, { json } from "express";

const app=express();

app.use(express.json());

const PORT=5001;

app.get("/",(req,res)=>{
    res.send("Windows is jealous of Linux")
});

app.get("/Bravo",(req,res)=>{
    res.send("Nothing personal")
});

app.post("/register",(req,res)=>{
    let userData=req.body
    console.log(userData)
    res.json({msg:"You have registered successfuly bro"})
})

app.post("/students/:roll",(req,res)=>{
  let id = req.params.roll;
  console.log(id)
  res.json(id)
})
app.listen(PORT,()=>{
    console.log(`server is running at http:localhost:${PORT}`)
})






/*
HTTP Methods 

1.GET ===> Get or fetch the data / local or db 
2.POST ==> Adding new data ==> in db or local
3.PUT ===> Editing the existing data ==> local or db
4.DELETE ==> delete the exisitng data ===> local or db 1

Create
Read
Update
Delete

CRUD Operations



*/


//Writing your  1st get/api

app.get("/",(req,res)=>{
    try{
        res.status(200).json({msg:"hello bruuuhhh"});
    }catch(error){
     console.log(error);
     res.status(500).json({msg:error});
    }
});

app.listen(PORT,()=>{
    console.log(`server is running at http:localhost:${PORT}`)
})

