const express = require('express')
const router = express.Router();
const Menu = require('./../models/menu');


router.post('/', async (req, res) => {  // Corrected syntax
    try {
        const data = req.body;
        const newMenu = new Menu(data);
        const savedMenu = await newMenu.save();  // Corrected variable name
        console.log("Data saved");
        res.status(200).json(savedMenu);
    } catch (error) {
        console.log("Error saving person", error);
        res.status(500).json({error: 'Internal server error'});
    }
});



// Get method to get menu data

router.get('/', async (req, res)=>{
    try{
        const data = await Menu.find();
        console.log("Data saved");
        res.status(200).json(data);
    }catch{
        console.log("Error getting menu", error);
        res.status(500).json({error: 'Internal server error'});
    }
})

module.exports = router;