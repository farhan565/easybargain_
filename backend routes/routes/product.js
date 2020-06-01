var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var multer=require('multer');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/product';
// Set Storage Engine
const storage = multer.diskStorage({
   destination: './public/uploads/',
   filename: function(req, file, cb) {
       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
   }
});

// Init Upload
const upload = multer({
   storage: storage,
   limits: {fileSize: 1000000},
   fileFilter: function(req, file, cb) {
       checkFileType(file, cb);
   }
}).single('myImage');





function checkFileType(file, cb) {
   // Allowed ext
   const filetypes = /jpeg|jpg|png|gif/;

   // Check ext
   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

   // Check mime
   const mimetype = filetypes.test(file.mimetype);

   if (mimetype && extname) {
       return cb(null, true);
   } else {
       cb('Error: Image Only!');
   }
} 



var productSchema = mongoose.Schema({
    name: String,
price:String,
sname:String,
bidhistory:Array,
description:String,
adress:String,
image: String
 });
var Product = mongoose.model("Product", productSchema);

mongoose.connect(dbUrl, function(error){
    	if(error){
    		return console.log('There was a Problem Connecting to the Database')
    	}
    	console.log('Connected to the DB')
    } )

router.post('/', (req,res,next)=>{
    var personInfo = req.body; //Get the parsed information
//     upload(req, res, (err) => {
//       console.log(req.file.filename);
//       if (err) {
//           res.render('index', {
//               msg: err
//           });
//       } else {
//           if (req.file == undefined) {
//               res.render('index', {
//                   msg: 'Error: No File Selected'
//               });
//           } else {
//               res.render('index', {
//                   msg: 'File Uploaded!',
//                   file: `uploads/${req.file.filename}`
//               });
//           }
//       }
//   });
    
    if(!personInfo.name || !personInfo.iprice ||  !personInfo.sname || !personInfo.desc || !personInfo.ad){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newProduct = new Product({
          name: personInfo.name,
          price: personInfo.iprice,
          sname: personInfo.sname,
          description: personInfo.desc,
          adress: personInfo.ad

       });
         
       newProduct.save(function(err, Person){
          if(err)
             res.render('show_message', {message: "Database error", type: "error"});
          else
             res.render('show_message', {
                message: "New Product added", type: "success", person: personInfo});
       });
    }
 });

 router.get('/viewproduct', function(req, res){
    Product.find(function(err, response){
       res.json(response);
    });
 });

 router.delete('/deleteproduct', (req, res,next)=>{
    Product.findByIdAndRemove(req.body.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Product with id " + req.params.id + " removed."});
    });
 });


 router.post('/updateproduct', (req, res,next)=>{
    Product.findOneAndUpdate({name:req.body.prodName},{bidhistory:req.body.bidhistory},function(err, response){
       if(err) res.json({message: "Error in updating record "});
       else res.json({message: "Product with name " + req.body.name + " updated."});
    });
 });
//  router.put('/updatebyid', (req, res, next) => {
//    let id = {
//      _id: ObjectID(req.body.id)
//    };

//    Product.findOneandUpdate({_id: id}, {$set:{'name': personInfo.name , 'price': personInfo.iprice 
//   , 'sname': personInfo.sname ,'description': personInfo.desc ,'adress': personInfo.ad ,}},
//     (err, result) => {
//      if(err) {
//        throw err;
//      }
//      res.send('user updated sucessfully');
//    });
// });


 
 router.get('/view/:name', (req, res,next)=>{
   Product.findOne({name:req.params.name},function(err, response){
      if(err) res.json({message: "Error in updating record "});
      else res.json(response);
   });
});




//  router.post("/addImage",upload.single('prodImage'),(req,res,next){

//  })

 
 module.exports = router;