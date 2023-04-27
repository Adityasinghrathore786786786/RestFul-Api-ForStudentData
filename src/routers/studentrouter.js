const express = require("express");
const Student = require("../model/students");

const router = new express.Router();


router.get("/", (req, res)=>{
    res.send("This is the home page bhai");
})

//create a new student

//by using promise
// app.post("/student", (req, res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);

//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((err)=>{
//         res.status(400).send(err) 
//     })
//    // res.send("Hello from other side");
// })


//by using async await

router.post("/student", async(req, res)=>{

try{
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
}catch(e){
    res.status(400).send(e);
}

})

//read the data of registered student

router.get("/students", async(req, res)=>{

    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

//get the individual student data
router.get("/students/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        console.log(_id);
        const studentData = await Student.findById(_id);
       //const studentData = await Student.findById({_id:_id}).trim();
        console.log(studentData);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
        
    }
})


//update the student by its id

router.patch("/students/:id", async (req, res)=>{
    try {
        const _id = req.params.id;
        //console.log(req.params.id+"hello")
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body,
             {new:true});

        res.send(updateStudents);
        } catch(e) {
        res.status(400).send(e);
        
    }
})

//delete the student by id

router.delete("/students/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id);
    
    //for checking valid id:

      if(!req.params.id){
        return res.status(400).send();
      }
      res.send(deleteStudent);

    } catch (error) {

        res.status(500).send(error);
        
    }
})

module.exports = router;