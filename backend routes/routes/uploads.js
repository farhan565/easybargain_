var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/uploads';
var Storage= multer.diskStorage({ 
   destination:"./public/uploads/", 
   filename:(req,file,cb)=>{ 
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname)); 
}}); 
var upload = multer({ 
   storage:Storage}).single('file');
   mongoose.connect('mongodb://localhost:27017/upload', {
   useNewUrlParser: true});
var uploadSchema =new mongoose.Schema({	
   imagename: String, });
 var uploadModel = mongoose.model('uploadimage', uploadSchema);


router.post('/upload', upload,function(req, res, next) { 
   var imageFile=req.file.filename; 
var success =req.file.filename+ " uploaded successfully"; 
var imageDetails= new uploadModel({ 
   imagename:imageFile }); 
imageDetails.save(function(err,doc){
   if(err) throw err; 
imageData.exec(function(err,data){
   if(err) throw err;
   res.render('upload', { 
      title: 'Upload File', records:data, success:success });});
   });
});

      module.exports = router;

