var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db= require('./database/models')
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const commentRouter= require('./routes/comments');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Incluimos session:
app.use(session({
  secret:'marinodb',
  resave:false,
  saveUninitialized: true
}));
//paso dato de session a las vistas:
app.use(function(req,res,next){
  if(req.session.user !==undefined){
    res.locals.user=req.session.user
  }
  return next();
});

////Revisar cookie recordame
app.use(function(req, res, next){
  if(req.cookies.recordarme!==undefined && req.session.user==undefined){
    db.Usuario.findOne({
      where: {email:req.cookies.recordarme}
    })
      .then(function(user){
        req.session.user = user;
        res.locals.user = user;
        return next();
      })
      .catch(e => console.log(e))
  } else {
    return next(); 
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', commentRouter);

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
  res.render('error');
});


module.exports = app;
