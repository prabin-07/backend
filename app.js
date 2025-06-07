const express=require('express');
const app=new express();
const cors=require('cors')
const PORT=4000;
const productModel=require("./model/productData"); //To use the schema defined in another external file
require("./connection");
app.use(express.json())
app.use(cors());

//API end point to read data from the database
app.get('/tasktrackerr',async(req,res)=>{
    console.log("Inside API")
    try{
        const data=await tasktrackerModel.find();
        console.log(data);
        res.send(data) //To send data to the frontend as part of the response object
    }
    catch(error){
        console.log("Error occured while connecting to the DB");
    }
})

app.post('/newmember',async(req,res)=>{
    try {

            var item=req.body;
            const datasave=new tasktrackerModel(item);
            const saveddata= await datasave.save();
            res.send('Post successful');

    } catch (error) {
        console.log(error);
    }
})

//API end point for new document
app.post('/newproduct',async(req,res)=>{
    try {

            var item=req.body;
            const datasave=new productModel(item);
            const saveddata= await datasave.save();
            res.send('Post successful');
    } catch (error) {
        console.log(error)
    }
})

//delete a document
app.delete('/productremoval/:id',async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully')
    } catch (error) {
        console.log(error)
    }

})

//update a document
app.put('/product-updation/:id',async (req,res)=>{
    try {
     const data= await productModel.findByIdAndUpdate(req.params.id,req.body);
     res.send('Updated successfully')
    } catch (error) {
     console.log(error)
    }
 })


// Server in listening mode
app.listen(PORT, ()=>{
    console.log(`Server is in Listening mode ${PORT}`);
});