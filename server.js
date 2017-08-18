var express = require ("express")
var app =express();
var router=express.Router();
var path=__dirname+ '/vistas/';
app.use(express.static(__dirname + "/public"));
app.listen(1500 , function(){
	console.log("encendido");
})

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "mesa_dialogo.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "compromisos.html");
});
