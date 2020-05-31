




var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var  empRoutes = require("./routes/employee");
var bidderRouter=require('./routes/bidder');
var sellerRouter=require('./routes/seller');
var PersonRouter = require('./routes/person');
var ProductRouter = require('./routes/product');
// var UploadRouter = require('./routes/uploads');
var app = express();
var path= require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
///////////////////////////////
// app.use('/uploads',express.static('uploads'));
app.set('view engine', 'ejs');

app.get('/bidderlogin',(req, res)=>{
  res.render('bidder');
});
app.get('/personLogin',(req, res)=>{
  res.render('person');
});

app.get('/productLogin',(req, res)=>{
  res.render('product');
});
app.get('/sellerLogin',(req, res)=>{
  res.render('seller');

});



// app.get('/upload',(req, res)=>{
//   res.render('uploads');

// });

// app.get('/up',(req, res)=>{
//   res.render('uploads');

// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employee', empRoutes);
app.use('/bidder',  bidderRouter);
app.use('/seller',  sellerRouter);
app.use('/person',PersonRouter);
app.use('/product',ProductRouter);
// app.use('/upload',UploadRouter);
// app.use('/uploads',UploadRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.jade');
});



// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('FXuEfuAERji7ONAvKFZ1dg.Q2hvyVwYkobAmiui0HO8PIbzyAxqQXCoGd1BVkxvkI8');
// const msg = {
//   to: 'umersayeed77@gmail.com',
//   from: 'farhanaahmed8131@gmail.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'Your order has been dispatched',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);


module.exports = app;
