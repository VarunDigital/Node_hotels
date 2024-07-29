const express = require('express')
const router = express.Router();
const Person = require('./../models/person');
const { findByIdAndUpdate } = require('../models/menu');

router.post('/', async (req, res) => {  // Corrected syntax
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();  // Corrected variable name
        console.log("Data saved");
        res.status(200).json(savedPerson);
    } catch (error) {
        console.log("Error saving person", error);
        res.status(500).json({error: 'Internal server error'});
    }
});

// Get method to get data

router.get('/', async (req, res)=>{
    try{
        const data = await Person.find();
        console.log("Data saved");
        res.status(200).json(data);
    }catch{
        console.log("Error getting person", error);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/:workType', async (req, res)=>{
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'waiter' || workType == 'doctor'){
            const response = await Person.find({work: workType});
            console.log("Response saved");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid type work'})
        }
    }catch{
        console.log("Error getting person worktype", error);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.put('/:id', async (req, res)=>{
    try{
        const personID = req.params.id;
        const personUpdateData = req.body;
        const response = await Person.findByIdAndUpdate(personID, personUpdateData, {
            new: true,
            runValidators: true,
        })
        if(!response){
            return res.status(400).json({error: "Person not found"});
        }
        console.log("Data updated");
        res.status(200).json(response);
    }
    catch(err){
        console.log("Error: ", err);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const personID = req.params.id;
        const response = await Person.findByIdAndDelete(personID);
        if(!response){
            return res.status(400).json({error: "Person not found"});
        }
        console.log("Data deleted");
        res.status(200).json({message: "person deleted successfully"});
    }
    catch(err){
        console.log("Error: ", err);
        res.status(500).json({error: 'Internal server error'});
    }
})

module.exports = router;